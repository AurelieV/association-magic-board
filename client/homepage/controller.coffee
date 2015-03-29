angular.module 'my-app.homepage'
.controller 'homepageController',
  ($scope, Member, $mdDialog, $mdToast) ->
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

    $scope.edit = ($event, member) ->
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
    delete $scope.member.id if edit
    Member.update {where:{id: member.id}}
    , $scope.member
    , (memberUpdate) ->
      angular.copy $scope.member, member
      $mdDialog.hide memberUpdate
    , (err) ->
      $mdToast.showSimple "Impossible d'éditer le membre" 
