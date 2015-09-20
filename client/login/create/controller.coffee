angular.module 'association-magic-board'
.controller 'createLoginController', ($scope, loginFactory) ->
  $scope.loginFactory = loginFactory
