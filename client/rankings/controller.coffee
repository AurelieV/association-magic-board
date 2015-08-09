angular.module 'association-magic-board'
.controller 'rankingsController', ($scope, seasons, $mdToast, $state, Season, currentSeason) ->
  $scope.seasons = seasons

  $scope.goToRanking = (season) ->
    $state.go 'rankings.details', {id: season.id}
