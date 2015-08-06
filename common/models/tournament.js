var async = require('async');

module.exports = function(Tournament) {
  Tournament.createWithRanks = function(tournament, ranks, next) {
    Tournament.create(tournament, function(err, tournament) {
      if (err) {
        return next(err);
      }
      async.each(ranks, function(rank, cb) {
        tournament.ranks.create(rank, cb);
      }, function(err) {
        if (err) {
          return next(err);
        }
        return next(null, tournament);
      });
      if (ranks.length == 0) {
        return next(null, tournament);
      }
    });
  };
  return Tournament.remoteMethod('createWithRanks', {
    accepts: [
      {
        arg: 'tournament',
        type: 'object'
      }, {
        arg: 'ranks',
        type: 'Array(object)'
      }
    ],
    returns: {
      arg: 'tournament',
      type: 'object'
    },
    http: {
      path: '/createWithRanks',
      verb: 'post'
    }
  });
};

