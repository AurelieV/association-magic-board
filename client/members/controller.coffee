angular.module 'association-magic-board.members'
.controller 'membersController',
  ($scope, Member, $mdDialog, $mdToast, currentSeason, $state, $stateParams, $rootScope) ->
    $scope.currentSeason = currentSeason[0]

    # TODO: Move to router when homepage will be an other page
    Member.find
      filter:
        include: 'contributions'
    , (members) ->
      $scope.members = members
    , (err) ->
      $mdToast.showSimple "Impossible d'afficher les membres"

    $scope.goToMember = (member) ->
      $state.go 'members.details', {id: member.id}

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

    $rootScope.$on 'memberUpdated', (event, memberUpdated) ->
      member = _.find $scope.members, (member) -> member.id is memberUpdated.id
      return unless member
      angular.copy memberUpdated, member


