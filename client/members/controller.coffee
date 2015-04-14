angular.module 'my-app.members'
.controller 'membersController',
  ($scope, $document, Member, $mdDialog, $mdToast, $state, $location, $anchorScroll, currentSeason) ->
    $scope.selectedMember = null
    $scope.isEditing = false
    $scope.currentSeason = currentSeason[0]

    Member.find {}
    , (members) ->
      $scope.members = members
    , (err) ->
      $mdToast.showSimple "Impossible d'afficher les membres"

    scrollToMember = (member) ->
      return unless member
      $location.hash('member' + member.id)
      $anchorScroll()
     
    select = (member) ->
      return if member?.id is $scope.selectedMember?.id
      $scope.isEditing = false
      $scope.selectedMember = member
      scrollToMember member

    $document.on 'click', ->
      $scope.$apply ->
        select null
    $scope.$on '$destroy', ->
      $document.off 'click'

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
        scrollToMember member
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"
    
    $scope.select = ($event, member) ->
     $event.stopPropagation()
     select member


     
