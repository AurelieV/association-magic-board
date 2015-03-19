angular.module 'my-app.homepage'
.controller 'homepageController',
  ($scope, $state) ->
    $scope.add = ->
      $state.go 'add'
