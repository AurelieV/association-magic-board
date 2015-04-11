angular.module 'my-app.homepage'
.controller 'homepageController',
  ($scope, $document, Member, $mdDialog, $mdToast, $state) ->
    $scope.selectedMember = null
    $scope.isEditing = false
     
    select = (member) ->
      $scope.selectedMember = member

    $document.on 'click', ->
      $scope.$apply ->
        select null
    $scope.$on '$destroy', ->
      $document.off 'click'

    Member.find {}
    , (members) ->
      $scope.members = members
    , (err) ->
      console.log 'err', err

    $scope.add = ($event) ->
      $mdDialog.show
        templateUrl: 'homepage/add/view.html'
        targetEvent: $event
        clickOutsideToClose: false
        controller: 'addOrEditMemberController'
      .then (member) ->
        $scope.members.push member
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"
    
    $scope.select = ($event, member) ->
     $event.stopPropagation()
     select member

    $scope.edit = ($event, member) ->
      $scope.isEditing = true
      $scope.editMember = angular.copy member
      delete $scope.editMember.id

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

angular.module 'my-app.homepage'
.controller 'addOrEditMemberController'
, ($scope, $mdDialog, Member) -> 
  $scope.cancel = ($event)->
    $event.preventDefault()
    $mdDialog.cancel()
  $scope.create = ($event) ->
    Member.create $scope.member
    , (member) ->
      $mdDialog.hide(member)
    , (err) ->
      $mdToast.showSimple "Impossible de créer le membre"
     
