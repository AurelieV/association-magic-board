angular.module 'my-app.homepage'
.controller 'homepageController',
  ($scope, $document, Member, $mdDialog, $mdToast, $state) ->
    $scope.selectedMember = null
     
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
        locals:
          edit: false
          member: null
      .then (member) ->
        $scope.members.push member
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"
    
    $scope.select = ($event, member) ->
     $event.stopPropagation()
     select member

    $scope.oldedit = ($event, member) ->
      $mdDialog.show
        templateUrl: 'homepage/add/view.html'
        targetEvent: $event
        clickOutsideToClose: false
        controller: 'addOrEditMemberController'
        locals:
          edit: true
          member: member
      .then (member) ->
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} édité"     


angular.module 'my-app.homepage'
.controller 'addOrEditMemberController'
, ($scope, $mdDialog, Member, edit, member) -> 
  $scope.member = angular.copy member if edit
  $scope.isNew = !edit
  $scope.cancel = ($event)->
    $event.preventDefault()
    $mdDialog.cancel()
  $scope.create = ($event) ->
    Member.create $scope.member
    , (member) ->
      $mdDialog.hide(member)
    , (err) ->
      $mdToast.showSimple "Impossible de créer le membre"
  $scope.edit = ($event) ->
    delete $scope.member.id
    Member.update {where:{id: member.id}}
    , $scope.member
    , (memberUpdate) ->
      console.log 'update', memberUpdate
      id = member.id
      angular.copy memberUpdate, member
      member.id = id
      $mdDialog.hide member
    , (err) ->
      $mdToast.showSimple "Impossible d'éditer le membre" 
