angular.module 'my-app.members'
.controller 'editMemberController', ($scope) ->
  $scope.edit = ($event, member) ->
    $scope.isEditing = true
