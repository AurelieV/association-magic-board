angular.module 'association-magic-board'
.controller 'homeController', ($scope, loginFactory) ->
  $scope.loginFactory = loginFactory
