angular.module 'association-magic-board'
.config ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider, $urlMatcherFactoryProvider) ->
  $compileProvider.aHrefSanitizationWhitelist /^\s*(mailto|tel|http|https):/

  $urlRouterProvider.otherwise '/'

  $urlMatcherFactoryProvider.strictMode(false)

  $stateProvider
  .state 'members',
    url: '/'
    controller: 'membersController'
    templateUrl: 'members/view.html'
    data:
      listSizeSm: 100
      detailsSizeSm: 0
    resolve:
      currentSeason: (Season) ->
        Season.find
          filter:
            include: 'members'
            order: 'start DESC'
            limit: 1
        .$promise

  .state 'members.details',
    url: 'details/:id'
    views:
      'details@members':
        controller: 'membersDetailsController'
        templateUrl: 'members/details/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100
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
  .state 'members.new',
    url: 'new'
    views:
      'details@members':
        controller: 'membersNewController'
        templateUrl: 'members/new/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100

  .state 'seasons',
    url: '/seasons'
    controller: 'seasonsController'
    templateUrl: 'seasons/view.html'
    resolve:
      seasons: (Season) ->
        Season.find
          filter:
            order: 'start DESC'
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
  .state 'seasons.new',
    url: '/new'
    views:
      'details@seasons':
        controller: 'seasonsNewController'
        templateUrl: 'seasons/new/view.html'

  delete $httpProvider.defaults.headers.common['X-Requested-With']
