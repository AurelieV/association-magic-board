angular.module('association-magic-board', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'

  'association-magic-board.templates'
])
.run ($mdSidenav, $rootScope, $state) ->
  moment.locale 'fr'

  $rootScope.openMenu = -> $mdSidenav('left').toggle()

  $rootScope.$on '$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
    console.log 'error', error
    event.preventDefault()

  $rootScope.$on '$stateChangeSuccess', (event) ->
    $mdSidenav('left').close()

  $rootScope.$state = $state



