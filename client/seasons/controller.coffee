angular.module 'association-magic-board'
.controller 'seasonsController', ($scope, seasons, $mdToast, $state, Season) ->
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

  nameCurrent = (season) ->
    Season.prototype$updateAttributes {id: season.id}, {isCurrent: true}
    , (seasonUpdated) ->
      season.isCurrent = true
      $mdToast.showSimple "Saison courante redéfinie"
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.defineAsCurrent = (season, $event) ->
    $event.stopPropagation()
    return if season.isCurrent
    current = _.find $scope.seasons, (season) -> season.isCurrent
    return nameCurrent(season) unless current?
    Season.prototype$updateAttributes {id: current.id}, {isCurrent: false}
    , (seasonUpdated) ->
      current.isCurrent = false
      nameCurrent(season)
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"



