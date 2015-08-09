angular.module 'association-magic-board'
.controller 'rankingsDetailsController', ($scope, season, members) ->
  $scope.season = season
  $scope.members = _.filter members, (member) -> member.seasonRankings.length > 0

  $scope.points = (member) ->
    - member.seasonRankings[0].leaguePoints





