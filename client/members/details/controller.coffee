angular.module 'association-magic-board.member'
.controller 'membersDetailsController', ($scope, member, Member, $rootScope, Contribution, seasons, $mdToast) ->
  $scope.member = member
  $scope.seasons = seasons

  $scope.edit =
    name: false
  $scope.editMember = {}
  $scope.editedContribution = {}

  $scope.editName = ->
    $scope.edit.name = true
    angular.copy
      lastname: member.lastname
      firstname: member.firstname
    , $scope.editMember

  $scope.editGlobalInfo = ->
    $scope.edit.globalInfo = true
    angular.copy
      dci_number: member.dci_number
      email: member.email
    , $scope.editMember

  $scope.addContribution = (season) ->
    $scope.edit.contribution = true
    season.isAdding = true
    $scope.newContribution =
      date: new Date()

  $scope.editContribution = (season) ->
    $scope.edit.contribution = true
    angular.copy season.contributions[0], $scope.editedContribution
    #Cast to date
    $scope.editedContribution.date = new Date $scope.editedContribution.date
    season.isEditing = true

  $scope.cancelName = ->
    $scope.edit.name = false

  $scope.cancelGlobalInfo = ->
    $scope.edit.globalInfo = false

  $scope.cancelAddContribution = (season) ->
    $scope.edit.contribution = false
    season.isAdding = false

  $scope.cancelEditContribution = (season) ->
    $scope.edit.contribution = false
    season.isEditing = false

  $scope.saveName = (form) ->
    return unless form.$valid
    Member.prototype$updateAttributes {id: member.id}, $scope.editMember
    , (memberUpdated) ->
      angular.copy memberUpdated, member
      $scope.edit.name = false
      $rootScope.$broadcast 'memberUpdated', member
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.saveGlobalInfo = (form) ->
    return unless form.$valid
    Member.prototype$updateAttributes {id: member.id}, $scope.editMember
    , (memberUpdated) ->
      angular.copy memberUpdated, member
      $scope.edit.globalInfo = false
      $rootScope.$broadcast 'memberUpdated', member
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.saveAddContribution = (form, season) ->
    return unless form.$valid
    $scope.newContribution.seasonId = season.id
    Member.contributions.create {id: member.id}, $scope.newContribution
    , (contribution) ->
      season.contributions.push contribution
      $scope.edit.addContribution = false
      season.isAdding = false
    , (err) ->
      $mdToast.showSimple "Impossible de créer la cotisations"

  $scope.saveEditContribution = (form, season) ->
    return unless form.$valid
    Contribution.prototype$updateAttributes {id: season.contributions[0].id}, $scope.editedContribution
    , (contribution) ->
      angular.copy contribution, season.contributions[0]
      $scope.edit.contribution = false
      season.isAdding = false
    , (err) ->
      $mdToast.showSimple "Impossible de sauvegarder les changements"

  $scope.getAmount = (season) ->
    contrib = _.find $scope.member.contributions, (contribution) ->
      contribution.seasonId is season.id
    return contrib?.amount

  $scope.hasContributed = (season) ->
    contrib = _.find $scope.member.contributions, (contribution) ->
      contribution.seasonId is season.id
    return contrib?



