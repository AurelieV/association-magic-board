angular.module('association-magic-board', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'
  'ngStorage'

  'association-magic-board.templates'
])
.run ($mdSidenav, $rootScope, $state, loginFactory) ->
  moment.locale 'fr'

  $rootScope.openMenu = -> $mdSidenav('left').toggle()

  $rootScope.$on '$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
    if (error.status is 404) and (toState.name is 'seasons.current')
      event.preventDefault()
      $state.go 'seasons'

  $rootScope.$on '$stateChangeStart', (event, toState) ->
    return unless toState.data?.roleRequired?
    return unless loginFactory.isGranted(toState.data.roleRequired?)
    event.preventDefault()
    $mdToast 'Vous n\'avez pas les droits nécessaire pour accéder à cette page'
    $state.go 'home'

  $rootScope.loginFactory = loginFactory

  $rootScope.$on '$stateChangeSuccess', (event) ->
    $mdSidenav('left').close()

  $rootScope.$state = $state



