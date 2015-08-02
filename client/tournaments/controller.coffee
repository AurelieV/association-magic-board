angular.module 'association-magic-board'
.controller 'tournamentsController',
  ($scope, currentSeason, $state, tournaments) ->
    $scope.currentSeason = currentSeason[0]
    $scope.tournaments = tournaments

    $scope.goToTournament = (tournament) ->
      $state.go 'tournaments.details', {id: tournament.id}

    $scope.add = ->
      $state.go 'tournaments.new'

    $scope.$on 'tournamentAdded', (event, tournamentNew) ->
      $scope.tournaments.push tournamentNew
