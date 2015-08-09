async = require('async')

module.exports = (Tournament) ->
  Tournament.createWithRanks = (tournament, ranks, next) ->
    Tournament.create tournament, (err, tournament) ->
      if err
        return next(err)
      async.each ranks, (rank, cb) ->
        tournament.ranks.create rank, cb
      , (err) ->
        return next(err) if err
        next null, tournament
      if ranks.length == 0
        return next(null, tournament)

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

