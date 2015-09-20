angular.module 'association-magic-board'
.directive 'menu', (loginFactory) ->
  restrict: 'A'
  templateUrl: 'menu/view.html'
  link: (scope) ->
    scope.loginFactory = loginFactory
