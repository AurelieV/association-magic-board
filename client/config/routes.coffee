angular.module 'association-magic-board'
.config ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) ->
  $compileProvider.aHrefSanitizationWhitelist /^\s*(mailto|tel|http|https):/

  $urlRouterProvider.otherwise '/'

  $stateProvider
  .state 'members',
    url: '/'
    controller: 'membersController'
    templateUrl: 'members/view.html'
    resolve:
      currentSeason: (Season) ->
        Season.find
          filter:
            orderBy: 'start DESC'
            include: 'members'
          limit: 1
        .$promise
  .state 'seasons',
    url: '/seasons'
    controller: 'seasonsController'
    templateUrl: 'seasons/view.html'
    resolve:
      seasons: (Season) ->
        Season.find
          filter:
            include: 'members'
        .$promise

  delete $httpProvider.defaults.headers.common['X-Requested-With']
