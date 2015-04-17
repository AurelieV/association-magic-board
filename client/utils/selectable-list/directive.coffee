angular.module 'my-app.utils'
.directive 'selectableList', () ->
  restric: 'AEC'
  transclude: true
  controller: 'selectableListController'
  template: '<div ng-transclude></div>'
  
