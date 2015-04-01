angular.module 'my-app'
.config ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) ->
  $compileProvider.aHrefSanitizationWhitelist /^\s*(mailto|tel|http|https):/

  $urlRouterProvider.otherwise '/'

  $stateProvider
  .state 'home',
    url: '/'
    controller: 'homepageController'
    templateUrl: 'homepage/view.html'
  .state 'member',
    url: '/member/:id'
    controller: 'memberController'
    templateUrl: 'member/view.html'
    resolve:
      member: (memberFactory, $stateParams) ->
        memberFactory.getMember $stateParams.id

  delete $httpProvider.defaults.headers.common['X-Requested-With']
