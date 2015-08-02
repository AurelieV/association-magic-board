angular.module 'association-magic-board'
.controller 'tournamentsNewController', (Tournament, $scope, $mdToast, $state, $rootScope) ->
  $scope.cancel = ->
    $state.go 'tournaments'

  x2js = new X2JS()
  $scope.tournament = {}
  $scope.tournament.date = new Date()

  $scope.create = ->
    Tournament.create $scope.tournament
    , (tournament) ->
      $mdToast.showSimple "#{tournament.name} créé"
      $state.go 'tournaments.details', {id: tournament.id}
      $rootScope.$broadcast 'tournamentAdded', tournament
    , (err) ->
      $mdToast.showSimple "Impossible de créer le tournoi"

  $scope.parseFile = ($fileContent) ->
    json = x2js.xml_str2json $fileContent
    $scope.results = json.Standings?.Team

