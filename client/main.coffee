angular.module('my-app', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'
  'ngMdIcons'

  # App submodules
  'my-app.members'
  'my-app.seasons'
  'my-app.templates'
  'my-app.utils'
])
.run ($mdSidenav, $rootScope) ->
  $rootScope.openMenu = -> $mdSidenav('left').toggle()



