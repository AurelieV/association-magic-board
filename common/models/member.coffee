module.exports = (Member) ->
  Member.forumMember = (id, next) ->
    SeasonRanking = Member.app.models.SeasonRanking
    Season = Member.app.models.Season
    Season.findOne
      where:
        isCurrent: true
    , (err, currentSeason) ->
      next err if err
      next(true) unless currentSeason
      SeasonRanking.findOne
        where:
          memberId: id
          seasonId: currentSeason.id
      , (err, currentSeasonRanking) ->
        if currentSeasonRanking
          if not currentSeasonRanking.isForumMember
            currentSeasonRanking.isForumMember = true
            currentSeasonRanking.leaguePoints = 10 + currentSeasonRanking.leaguePoints
            currentSeasonRanking.save next
            return
          next(null, currentSeasonRanking)
        else
          SeasonRanking.create
            memberId: id
            seasonId: currentSeason.id
            leaguePoints: 10
            isForumMember: true
          , next

  Member.remoteMethod 'forumMember',
    accepts: [
      arg: 'id'
      type: 'string'
    ]
    returns:
      arg: 'currentSeasonRanking'
      type: 'object'
      root: true
    http:
      path: '/forumMember'
      verb: 'post'



