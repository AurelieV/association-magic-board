angular.module 'association-magic-board'
.controller 'loginController', ($scope, loginFactory) ->
  $scope.loginFactory = loginFactory
