angular.module 'association-magic-board'
.controller 'seasonsController', ($scope, seasons, $mdToast, $state, Season, $rootScope) ->
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

  nameCurrent = (seasonToUpdate) ->
    Season.prototype$updateAttributes {id: seasonToUpdate.id}, {isCurrent: true}
    , (seasonUpdated) ->
      #Update detail object
      seasonToUpdate.isCurrent = true

      #Update list object
      seasonUpdated = _.find $scope.seasons, (season) -> season.id is seasonToUpdate.id
      seasonUpdated.isCurrent = true if seasonUpdated

      $mdToast.showSimple "Saison courante redéfinie"
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.$on 'defineCurrent', ($event, seasonToUpdate) ->
    current = _.find $scope.seasons, (season) -> season.isCurrent
    return nameCurrent(seasonToUpdate) unless current?
    Season.prototype$updateAttributes {id: current.id}, {isCurrent: false}
    , (seasonUpdated) ->
      current.isCurrent = false
      nameCurrent(seasonToUpdate)
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"



