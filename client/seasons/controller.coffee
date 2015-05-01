angular.module 'association-magic-board.seasons'
.controller 'seasonsController', ($scope, seasons, $mdDialog, $mdToast) ->
  $scope.seasons = seasons

  $scope.totalContributions = (season) ->
    totalContributions = 0
    for contribution in season.contributions
      totalContributions = totalContributions.amount + totalContributions
    return totalContributions

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

angular.module 'association-magic-board.seasons'
.controller 'addSeasonController'
, ($scope, $mdDialog, Season) ->
  $scope.cancel = ($event)->
    $event.preventDefault()
    $mdDialog.cancel()
  $scope.create = ($event) ->
    Season.create $scope.season
    , (season) ->
      $mdDialog.hide(season)
    , (err) ->
      $mdToast.showSimple "Impossible de créer la saison"


