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

  .state 'members.details',
    url: 'details/:id'
    views:
      'details@members':
        controller: 'membersDetailsController'
        templateUrl: 'members/details/view.html'
    resolve:
      member: ($stateParams, Member) ->
        Member.findOne
          filter:
            where:
              id: $stateParams.id
        .$promise
      seasons: ($stateParams, Season) ->
        Season.find
          filter:
            include:
              relation: 'contributions'
              scope:
                where:
                  memberId: $stateParams.id
        .$promise

  .state 'seasons',
    url: '/seasons'
    controller: 'seasonsController'
    templateUrl: 'seasons/view.html'
    resolve:
      seasons: (Season) ->
        Season.find {}
        .$promise
  .state 'seasons.details',
    url: '/details/:id'
    views:
      'details@seasons':
        controller: 'seasonsDetailsController'
        templateUrl: 'seasons/details/view.html'
    resolve:
      season: (Season, $stateParams) ->
        Season.findOne
          filter:
            where:
              id: $stateParams.id
            include:
              relation: 'contributions'
              scope:
                include: ['member']
        .$promise

  delete $httpProvider.defaults.headers.common['X-Requested-With']
