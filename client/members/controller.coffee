angular.module 'association-magic-board'
.controller 'membersController',
  ($scope, Member, currentSeason, $state) ->
    $scope.currentSeason = currentSeason[0]
    $scope.$state = $state

    $scope.filter = {}
    $scope.filter.isActive = true
    $scope.activeFilter = 'active'

    Member.find
      filter:
        include: 'seasons'
    , (members) ->
      $scope.members = members
      for member in members
        if currentSeason[0]?
          current = _.find member.seasons, (season) -> season.isCurrent
          member.isActive = current?
        else
          member.isActive = false
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

    $scope.$on 'contributionAdded', (event, contributionAdded) ->
      if currentSeason[0] and (contributionAdded.seasonId is currentSeason[0].id)
        member = _.find $scope.members, (member) -> member.id is contributionAdded.memberId
        member.isActive = true if member?

    $scope.seeOnlyInactive = ->
      $scope.filter.isActive = false
      $scope.activeFilter = 'inactive'

    $scope.seeOnlyActive = ->
      $scope.filter.isActive = true
      $scope.activeFilter = 'active'

    $scope.seeAll = ->
      delete $scope.filter.isActive
      $scope.activeFilter = 'all'


