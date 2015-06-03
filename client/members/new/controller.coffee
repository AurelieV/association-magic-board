angular.module 'association-magic-board'
.controller 'membersNewController'
, ($scope, Member, Contribution, currentSeason, $state, $mdToast, $rootScope) ->
  #Init scope
  $scope.currentSeason = currentSeason[0]
  $scope.contribution = {}

  $scope.cancel = ->
    $state.go 'members'

  createMember = (member) ->
    $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"
    $state.go 'members.details', {id: member.id}
    $rootScope.$broadcast 'memberAdded', member

  $scope.create = ->
    Member.create $scope.member
    , (member) ->
      if $scope.contribution.amount > 0 and $scope.contribution.date and $scope.currentSeason.id
        Contribution.create
          memberId: member.id
          seasonId: $scope.currentSeason.id
          amount: $scope.contribution.amount
          date: $scope.contribution.date
        , (contribution) ->
          member.contributions =  [contribution]
          createMember member
        , (err) ->
          console.log err
          $mdToast.showSimple "Impossible d'ajouter la cotisation"
      else
        createMember member
    , (err) ->
      $mdToast.showSimple "Impossible de créer le membre"
