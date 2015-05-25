angular.module 'association-magic-board.seasons'
.controller 'seasonsController', ($scope, seasons, $mdToast, $state) ->
  $scope.seasons = seasons

  $scope.goToSeason = (season) ->
    $state.go 'seasons.details', {id: season.id}

  $scope.add = ->
    $state.go 'seasons.new'

  $scope.$on 'seasonAdded', (event, seasonNew) ->
    $scope.seasons.push seasonNew

  $scope.$on 'seasonUpdated', (event, seasonUpdated) ->
    season = _.find $scope.seasons, (season) -> season.id is seasonUpdated.id
    return unless season
    angular.copy seasonUpdated, season

