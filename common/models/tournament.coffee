async = require('async')

module.exports = (Tournament) ->
  #TODO: use transaction to do this?
  Tournament.createWithRanks = (tournament, ranks, next) ->
    Tournament.create tournament, (err, tournament) ->
      if err
        return next(err)
      async.each ranks, (rank, cb) ->
        tournament.ranks.create rank, (err, rank) ->
          return cb(err) if err
          #To not add contribution if no member
          return cb(null) unless rank.memberId
          Contribution = Tournament.app.models.Contribution
          #Create participation ony if member is active in currentSeason
          Contribution.find {where:{memberId: rank.memberId, seasonId: tournament.seasonId}}, (err, contributions) ->
            return cb(err) if err
            return cb(null) if contributions.length is 0
            Tournament.createParticipation tournament, rank, cb
      , (err) ->
        return next(err, tournament)
      if ranks.length is 0
        return next(null, tournament)

  Tournament.createParticipation = (tournament, rank, next) ->
    data =
      memberId: rank.memberId
      seasonId: tournament.seasonId
    SeasonRanking = Tournament.app.models.SeasonRanking
    SeasonRanking.findOrCreate {where: data}, data, (err, seasonRanking) ->
      return next err if err
      participation =
        leaguePoints: tournament.leaguePoints
        tournamentId: tournament.id
      seasonRanking.participations.create participation, (err, participation) ->
        return next err if err
        seasonRanking.numberOfParticipations = seasonRanking.numberOfParticipations + 1
        seasonRanking.leaguePoints = seasonRanking.leaguePoints + participation.leaguePoints

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
      ,
        arg: 'ranks'
        type: 'Array(object)'
    ]
    returns:
      arg: 'tournament'
      type: 'object'
    http:
      path: '/createWithRanks'
      verb: 'post'

