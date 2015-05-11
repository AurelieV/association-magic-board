angular.module 'association-magic-board.seasons'
.controller 'seasonsController', ($scope, seasons, $mdDialog, $mdToast, $state, $rootScope) ->
  $scope.seasons = seasons

  $scope.goToSeason = (season) ->
    $state.go 'seasons.details', {id: season.id}

  $scope.add = ($event) ->
    $mdDialog.show
      templateUrl: 'seasons/add/view.html'
      targetEvent: $event
      clickOutsideToClose: false
      controller: 'addSeasonController'
    .then (season) ->
      season.members = []
      $scope.seasons.push season
      $mdToast.showSimple "#{season.name} créé"

  $rootScope.$on 'seasonUpdated', (event, seasonUpdated) ->
    season = _.find $scope.seasons, (season) -> season.id is seasonUpdated.id
    return unless season
    angular.copy seasonUpdated, season

