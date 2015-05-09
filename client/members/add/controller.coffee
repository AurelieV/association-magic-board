angular.module 'association-magic-board.members'
.controller 'addMemberController'
, ($scope, $mdDialog, Member, Contribution, currentSeason) ->
  #Init scope
  $scope.currentSeason = currentSeason
  $scope.contribution = {}

  $scope.cancel = ($event)->
    $event.preventDefault()
    $mdDialog.cancel()

  $scope.create = ($event) ->
    Member.create $scope.member
    , (member) ->
      if $scope.contribution.amount > 0
        Contribution.create
          memberId: member.id
          seasonId: currentSeason.id
          amount: $scope.contribution.amount
          date: $scope.contribution.date
        , (contribution) ->
          member.contributions =  [contribution]
          $mdDialog.hide(member)
        , (err) ->
          $mdToast.showSimple "Impossible d'ajouter la cotisation"
      else
        $mdDialog.hide(member)
    , (err) ->
      $mdToast.showSimple "Impossible de créer le membre"
