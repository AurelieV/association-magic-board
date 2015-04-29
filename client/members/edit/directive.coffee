angular.module 'association-magic-board.members'
.directive 'editMember', (Member) ->
  restrict: 'C'
  templateUrl: 'admin/incident/view.html'
  scope:
    member: '='
  link: ($scope) ->
    $scope.editMember = angular.copy $scope.member
    delete $scope.editMember.id


