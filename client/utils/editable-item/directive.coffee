angular.module 'association-magic-board'
.directive 'editableItem', ->
  restrict: 'AEC'
  templateUrl: 'utils/editable-item/view.html'
  transclude: true
  scope:
    saveObject: '&'
    editableObject: '='
    title: '='
  link: ($scope, el, attrs, ctrls, transclude) ->
    transclude (clone, scope) ->
      scope.parent = $scope
      content = angular.element(el[0].querySelector('.content'))
      content.append clone

    $scope.edit = ($event) ->
      $scope.isEditing = true
      $scope.editingObject = angular.copy $scope.editableObject

    $scope.cancel = ($event) ->
      $scope.isEditing = false

    $scope.save = ($event) ->
      $scope.isEditing = false
      saveObject = $scope.saveObject()
      saveObject $scope.editingObject, $scope.editableObject

