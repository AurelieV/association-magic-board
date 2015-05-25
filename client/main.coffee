angular.module('association-magic-board', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'

  # App submodules
  'association-magic-board.member'
  'association-magic-board.members'
  'association-magic-board.seasons'
  'association-magic-board.templates'
  'association-magic-board.utils'
])
.run ($mdSidenav, $rootScope) ->
  moment.locale 'fr'

  $rootScope.openMenu = -> $mdSidenav('left').toggle()

  $rootScope.$on '$stateChangeError', (event, toState, toParams, fromState, fromParams, error) ->
    console.log 'error', error
    event.preventDefault()

  $rootScope.$on '$stateChangeSuccess', (event) ->
    $mdSidenav('left').close()



