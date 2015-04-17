angular.module 'my-app.utils'
.directive 'selectableItem', () ->
  restric: 'AEC'
  templateUrl: 'utils/selectable-item/view.html'
  transclude: true
  scope:
    element: '='
  require: '^selectableList'
  link: ($scope, element, attrs, listCtl) ->
    $scope.close = -> listCtl.unselect()
    $scope.open = ->
      console.log 'open'
      listCtl.select $scope.element.id
    $scope.isSelected = -> listCtl.isSelected $scope.element.id
  
