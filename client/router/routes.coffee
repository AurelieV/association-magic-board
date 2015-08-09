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
            where:
              isCurrent: true
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
      previous: 'members'
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
      previous: 'members'

  .state 'seasons',
    url: '/seasons'
    controller: 'seasonsController'
    templateUrl: 'seasons/view.html'
    data:
      listSizeSm: 100
      detailsSizeSm: 0
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
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'seasons'
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
  .state 'seasons.current',
    url: '/current'
    views:
      'details@seasons':
        controller: 'seasonsDetailsController'
        templateUrl: 'seasons/details/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'seasons'
    resolve:
      season: (Season) ->
        Season.findOne
          filter:
            where:
              isCurrent: true
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
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'seasons'

  .state 'tournaments',
    url: '/tournaments'
    controller: 'tournamentsController'
    templateUrl: 'tournaments/view.html'
    data:
      listSizeSm: 100
      detailsSizeSm: 0
    resolve:
      currentSeason: (Season) ->
        Season.find
          filter:
            where:
              isCurrent: true
            limit: 1
        .$promise
      tournaments: (Tournament) ->
        Tournament.find
          filter:
            order: 'date DESC'
        .$promise

  .state 'tournaments.details',
    url: '/details/:id'
    views:
      'details@tournaments':
        controller: 'tournamentsDetailsController'
        templateUrl: 'tournaments/details/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'tournaments'
    resolve:
      tournament: (Tournament, $stateParams) ->
        Tournament.findOne
          filter:
            where:
              id: $stateParams.id
            include:
              relation: 'ranks'
              scope:
                include: 'member'
                orderBy: 'position'
        .$promise

  .state 'tournaments.new',
    url: '/new'
    views:
      'details@tournaments':
        controller: 'tournamentsNewController'
        templateUrl: 'tournaments/new/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'tournaments'
    resolve:
      currentSeason: (Season) ->
        Season.find
          filter:
            include: 'members'
            where:
              isCurrent: true
            limit: 1
        .$promise

  .state 'rankings',
    url: '/rankings'
    controller: 'rankingsController'
    templateUrl: 'rankings/view.html'
    data:
      listSizeSm: 100
      detailsSizeSm: 0
    resolve:
      seasons: (Season) ->
        Season.find
          filter:
            order: 'start DESC'
        .$promise
      currentSeason: (Season) ->
        Season.find
          filter:
            where:
              isCurrent: true
            limit: 1
        .$promise

  .state 'rankings.details',
    url: '/details/season/:id'
    views:
      'details@rankings':
        controller: 'rankingsDetailsController'
        templateUrl: 'rankings/details/view.html'
    data:
      listSizeSm: 0
      detailsSizeSm: 100
      previous: 'rankings'
    resolve:
      members: (Member, $stateParams) ->
        Member.find
          filter:
            include:
              relation: 'seasonRankings'
              scope:
                include: ['participations']
                where:
                  seasonId: $stateParams.id
        .$promise

      season: (Season, $stateParams) ->
        Season.findOne
          filter:
            where:
              id: $stateParams.id
        .$promise

  delete $httpProvider.defaults.headers.common['X-Requested-With']
