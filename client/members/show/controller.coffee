angular.module 'association-magic-board.members'
.controller 'editMemberController', ($scope) ->
  $scope.edit = ($event, member) ->
    $scope.isEditing = true
