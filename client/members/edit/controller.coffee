angular.module 'my-app.members'
.controller 'editMemberController', ($scope, Member) ->
  $scope.save = ($event, member) ->
    Member.update {where:{id: member.id}}
    , $scope.editMember
    , (memberUpdate) ->
      id = member.id
      angular.copy memberUpdate, member
      member.id = id
      $scope.isEditing = false
      $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} édité"
    , (err) ->
      $scope.isEditing = false
      $mdToast.showSimple "Impossible d'éditer le membre"
