angular.module 'association-magic-board'
.controller 'membersController',
  ($scope, Member, currentSeason, $state) ->
    $scope.currentSeason = currentSeason[0]
    $scope.$state = $state

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

    $scope.add = ->
      $state.go 'members.new'

    $scope.$on 'memberUpdated', (event, memberUpdated) ->
      member = _.find $scope.members, (member) -> member.id is memberUpdated.id
      return unless member
      angular.copy memberUpdated, member

    $scope.$on 'memberAdded', (event, memberAdded) ->
      $scope.members.push memberAdded


