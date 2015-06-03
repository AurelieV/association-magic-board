angular.module 'association-magic-board'
.controller 'seasonsNewController'
, ($scope, Season, $state, $rootScope, $mdToast) ->
  $scope.cancel = ->
    $state.go 'seasons';

  $scope.create = ->
    Season.create $scope.season
    , (season) ->
      season.members = []
      $mdToast.showSimple "#{season.name} créé"
      $state.go 'seasons.details', {id: season.id}
      $rootScope.$broadcast 'seasonAdded', season
    , (err) ->
      $mdToast.showSimple "Impossible de créer la saison"
