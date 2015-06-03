angular.module 'association-magic-board'
.directive 'selectableItem', ($location, $anchorScroll) ->
  restrict: 'AEC'
  templateUrl: 'utils/selectable-item/view.html'
  transclude: true
  scope: {}
  require: '^selectableList'
  link: ($scope, el, attrs, listCtl) ->

    listCtl.addItem $scope

    $scope.close = ($event) ->
      $event.stopPropagation()
      listCtl.unselect()

    $scope.open = ($event) ->
      $event.stopPropagation()
      listCtl.select $scope
      return unless attrs.id
      $location.hash attrs.id
      $anchorScroll

