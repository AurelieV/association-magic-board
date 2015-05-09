angular.module 'association-magic-board.members'
.controller 'membersController',
  ($scope, Member, $mdDialog, $mdToast, $location, $anchorScroll, currentSeason) ->
    $scope.isEditing = false
    $scope.currentSeason = currentSeason[0]

    # TODO: Move to router when homepage will be an other page
    Member.find
      filter:
        include: 'contributions'
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

    $scope.saveInformations = (editingMember, editableMember) ->
      angular.copy editingMember, editableMember

    $scope.getAmount = (member, season) ->
      contrib = _.find member.contributions, (contribution) ->
        contribution.seasonId is season.id
      return contrib?.amount

    $scope.hasContributed = (member, season) ->
      contrib = _.find member.contributions, (contribution) ->
        contribution.seasonId is season.id
      return contrib?


