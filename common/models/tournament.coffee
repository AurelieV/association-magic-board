async = require('async')

module.exports = (Tournament) ->
  #TODO: use transaction to do this?
  Tournament.createWithRanks = (tournament, next) ->
    Tournament.create tournament, (err, tournamentCreated) ->
      async.each tournamentCreated.ranks, (rank, cb) ->
        #To not add contribution if no member
        return cb(null) unless rank.memberId
        Contribution = Tournament.app.models.Contribution
        #Create participation only if member is active in currentSeason
        Contribution.find {where:{memberId: rank.memberId, seasonId: tournamentCreated.seasonId}}, (err, contributions) ->
          return cb(err) if err
          return cb(null) if contributions.length is 0
          Tournament.createParticipation tournamentCreated, rank, cb
      , (err) ->
        return next(err, tournamentCreated)
      if tournamentCreated.ranks.length is 0
        return next(null, tournamentCreated)

  Tournament.calculateMasterPoints = (nbRounds, nbPlayers, position, hasTop8) ->
    coeffJ = 2
    if nbPlayers >= 24
      coeffJ = 1.3
    if nbPlayers < 24 and nbPlayers >= 18
      coeffJ = 1.5

    g = (nbRounds - coeffJ) / nbRounds
    result = 0
    if not hasTop8
      result = nbRounds * Math.pow(g, position - 1) * Math.pow(nbPlayers / 2, 0.5)
    else
      if (position is 6) or (position is 7) or (position is 8)
        result = (nbRounds + 1) * Math.pow(g, 4) * Math.pow(nbPlayers / 2, 0.5)
      else
        result = (nbRounds + 1) * Math.pow(g, position - 1) * Math.pow(nbPlayers / 2, 0.5)

    return Math.max(Math.round(result), 0)

  Tournament.createParticipation = (tournament, rank, next) ->
    nbPlayers = tournament.ranks.length
    data =
      memberId: rank.memberId
      seasonId: tournament.seasonId
    SeasonRanking = Tournament.app.models.SeasonRanking
    SeasonRanking.findOrCreate {where: data}, data, (err, seasonRanking) ->
      return next err if err
      participation =
        leaguePoints: tournament.leaguePoints
        tournamentId: tournament.id
        masterPoints: Tournament.calculateMasterPoints(tournament.nbOfRounds, nbPlayers, rank.position, tournament.hasTop8)
        position: rank.position
      seasonRanking.participations.create participation, (err, participation) ->
        return next err if err
        seasonRanking.numberOfParticipations = seasonRanking.numberOfParticipations + 1
        seasonRanking.leaguePoints = seasonRanking.leaguePoints + participation.leaguePoints
        seasonRanking.masterPoints = seasonRanking.masterPoints + participation.masterPoints

        #TODO: put this on a parameter table
        if seasonRanking.numberOfParticipations is 5
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 5
        if seasonRanking.numberOfParticipations is 10
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 10
        if seasonRanking.numberOfParticipations is 15
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 15
        if seasonRanking.numberOfParticipations is 20
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 10
        if seasonRanking.numberOfParticipations is 25
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 20
        if seasonRanking.numberOfParticipations is 30
          seasonRanking.leaguePoints = seasonRanking.leaguePoints + 15

        seasonRanking.save next

  Tournament.remoteMethod 'createWithRanks',
    accepts: [
        arg: 'tournament'
        type: 'object'
    ]
    returns:
      arg: 'tournament'
      type: 'object'
    http:
      path: '/createWithRanks'
      verb: 'post'

