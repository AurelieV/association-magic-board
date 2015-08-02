angular.module 'association-magic-board'
.controller 'tournamentsNewController', (Tournament, $scope, $mdToast, $state, $rootScope) ->
  $scope.cancel = ->
    $state.go 'tournaments'

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
    $scope.fileParsed = $fileContent
