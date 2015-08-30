angular.module 'association-magic-board'
.controller 'rankingsDetailsController', ($scope, season, members) ->
  $scope.season = season
  $scope.members = _.filter members, (member) -> member.seasonRankings.length > 0
  $scope.activeRankingType = 'league'

  $scope.points = (member) ->
    if $scope.activeRankingType is 'league'
      return - member.seasonRankings[0].leaguePoints
    if  $scope.activeRankingType is 'master'
      return - member.seasonRankings[0].masterPoints

  $scope.changeActiveRanking = (ranking) ->
    $scope.activeRankingType = ranking





