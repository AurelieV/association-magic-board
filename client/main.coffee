angular.module('association-magic-board', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'
  'ngMdIcons'

  # App submodules
  'association-magic-board.members'
  'association-magic-board.seasons'
  'association-magic-board.templates'
  'association-magic-board.utils'
])
.run ($mdSidenav, $rootScope) ->
  $rootScope.openMenu = -> $mdSidenav('left').toggle()



