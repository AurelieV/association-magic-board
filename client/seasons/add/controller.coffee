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
