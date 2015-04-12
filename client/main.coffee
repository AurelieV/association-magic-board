angular.module('my-app', [
  # Vendors
  'ui.router'
  'lbServices'
  'ngMaterial'
  'alAngularHero'
  'ngAnimate'
  'ngMdIcons'

  # App submodules
  'my-app.homepage'
  'my-app.member'
  'my-app.seasons'
  'my-app.templates'
])
.run ($mdSidenav, $rootScope) ->
  $rootScope.openMenu = -> $mdSidenav('left').toggle()



