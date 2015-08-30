angular.module 'association-magic-board'
.controller 'tournamentsNewController', (currentSeason, Tournament, $scope, $mdToast, $state, $rootScope, Member) ->
  $scope.cancel = ->
    $state.go 'tournaments'

  x2js = new X2JS()
  $scope.tournament = {}
  $scope.tournament.date = new Date()
  $scope.tournament.seasonId = currentSeason[0]?.id

  $scope.create = ->
    ranks = []
    for result in $scope.results
      rank = {position: result._Rank, _Name: result._Name, _DCI: result._DCI}
      rank.memberId = result.member.id if result.member
      ranks.push rank
    $scope.tournament.ranks = ranks
    Tournament.createWithRanks {tournament: $scope.tournament}
    , (data) ->
      tournament = data.tournament
      $mdToast.showSimple "#{tournament.name} créé"
      $state.go 'tournaments.details', {id: tournament.id}
      $rootScope.$broadcast 'tournamentAdded', tournament
    , (err) ->
      $mdToast.showSimple "Impossible de créer le tournoi"

  $scope.parseFile = ($fileContent) ->
    $scope.isLoading = true
    $scope.loadingError = null
    json = x2js.xml_str2json $fileContent
    $scope.results = json.Standings?.Team
    async.each $scope.results
    , (result, next) ->
      return next() unless result._DCI
      Member.find
        filter:
          where:
            dci_number: result._DCI
      , (member) ->
        result.member = member[0]
        next()
      , next
    , (err) ->
      $scope.loadingError = err
      $scope.isLoading = false


