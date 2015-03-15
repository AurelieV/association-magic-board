angular.module 'my-app.homepage'
.controller 'homepageController',
  ($scope) ->
    console.log "coucou"
    $scope.toto = 'Coucou !'
