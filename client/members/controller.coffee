angular.module 'my-app.members'
.controller 'membersController',
  ($scope, Member, $mdDialog, $mdToast, $location, $anchorScroll, currentSeason) ->
    $scope.isEditing = false
    $scope.currentSeason = currentSeason[0]

    Member.find {}
    , (members) ->
      $scope.members = members
    , (err) ->
      $mdToast.showSimple "Impossible d'afficher les membres"
      
    $scope.add = ($event) ->
      $mdDialog.show
        templateUrl: 'members/add/view.html'
        targetEvent: $event
        clickOutsideToClose: false
        controller: 'addMemberController'
        locals:
          currentSeason: $scope.currentSeason
      .then (member) ->
        $scope.members.push member
        $location.hash 'member' + member.id
        $anchorScroll()
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"

     
