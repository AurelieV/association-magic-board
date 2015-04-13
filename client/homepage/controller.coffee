angular.module 'my-app.homepage'
.controller 'homepageController',
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


    $scope.hasPaid = (member) ->
      return false unless $scope.currentSeason
      m = _.find $scope.currentSeason.members, (m) -> member.id is m.id
      return m?.amount

    $document.on 'click', ->
      $scope.$apply ->
        select null
    $scope.$on '$destroy', ->
      $document.off 'click'

    $scope.add = ($event) ->
      $mdDialog.show
        templateUrl: 'homepage/add/view.html'
        targetEvent: $event
        clickOutsideToClose: false
        controller: 'addOrEditMemberController'
        locals:
          currentSeason: $scope.currentSeason
      .then (member) ->
        $scope.members.push member
        scrollToMember member
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} créé"
    
    $scope.select = ($event, member) ->
     $event.stopPropagation()
     select member

    $scope.edit = ($event, member) ->
      $scope.isEditing = true
      $scope.editMember = angular.copy member
      delete $scope.editMember.id

    $scope.save = ($event, member) ->
      Member.update {where:{id: member.id}}
      , $scope.editMember
      , (memberUpdate) -> 
        id = member.id
        angular.copy memberUpdate, member
        member.id = id
        $scope.isEditing = false
        $mdToast.showSimple "#{member.firstname} #{member.lastname.toUpperCase()} édité"
      , (err) ->
        $scope.isEditing = false
        $mdToast.showSimple "Impossible d'éditer le membre"

angular.module 'my-app.homepage'
.controller 'addOrEditMemberController'
, ($scope, $mdDialog, Member, currentSeason, Contribution) ->
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
          amount: $scope.contribution
        , (contribution) ->
          $mdDialog.hide(member)
        , (err) ->
          $mdToast.showSimple "Impossible de créer le membre"
      else
        $mdDialog.hide(member)
    , (err) ->
      $mdToast.showSimple "Impossible de créer le membre"
     
