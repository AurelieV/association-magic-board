angular.module 'association-magic-board'
.controller 'seasonsDetailsController', ($scope, season, Season, $rootScope) ->
  $scope.season = season

  $scope.edit =
    name: false
  $scope.editedSeason = {}
  $scope.editedContribution = {}

  $scope.editName = ->
    $scope.edit.name = true
    angular.copy
      name: season.name
    , $scope.editedSeason

  $scope.editDates = ->
    $scope.edit.dates = true
    angular.copy
      start: new Date season.start
      end: new Date season.end
    , $scope.editedSeason

  $scope.cancelName = ->
    $scope.edit.name = false
  $scope.cancelDates = ->
    $scope.edit.dates = false

  $scope.saveName = (form) ->
    return unless form.$valid
    Season.prototype$updateAttributes {id: season.id}, $scope.editedSeason
    , (seasonUpdated) ->
      season.name = seasonUpdated.name
      $scope.edit.name = false
      $rootScope.$broadcast 'seasonUpdated', season
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.saveDates = (form) ->
    return unless form.$valid
    Season.prototype$updateAttributes {id: season.id}, $scope.editedSeason
    , (seasonUpdated) ->
      season.start = seasonUpdated.start
      season.end = seasonUpdated.end
      $scope.edit.dates = false
      $rootScope.$broadcast 'seasonUpdated', season
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.totalContributions = (season) ->
    totalContributions = 0
    for contribution in season.contributions
      totalContributions = contribution.amount + totalContributions
    return totalContributions




