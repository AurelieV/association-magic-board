angular.module 'my-app'
.config ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) ->
  $compileProvider.aHrefSanitizationWhitelist /^\s*(mailto|tel|http|https):/

  $urlRouterProvider.otherwise '/'

  $stateProvider
  .state 'home',
    url: '/'
    controller: 'homepageController'
    templateUrl: 'homepage/view.html'
  .state 'add',
    url: '/add'
    controller: 'homepageController'
    templateUrl: 'homepage/add.html'

  delete $httpProvider.defaults.headers.common['X-Requested-With']
