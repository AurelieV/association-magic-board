angular.module 'my-app.member'
.factory 'memberFactory', (Member, $q) ->
  getMember: (id) ->
    deferred = $q.defer()
    console.log 'pipi'
    Member.findOne
      filter:
        where:
          id: id
    , (member) ->
      deferred.resolve member
    , (err) ->
      deferred.reject err
    deferred.promise
