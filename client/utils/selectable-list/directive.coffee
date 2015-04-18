angular.module 'my-app.utils'
.directive 'selectableList', () ->
  restric: 'AEC'
  transclude: true
  controller: 'selectableListController'
  template: '<div ng-transclude></div>'
  controller: ($scope, $document)->
    @items = []
     
    @select = (element) ->
     for item in @items
       item.selected = false
     element.selected = true

    @unselect = ->
      for item in @items
        item.selected = false

    @addItem = (element) ->
      @items.push element
       
    $document.on 'click', =>
      $scope.$apply =>
        @unselect()
    $scope.$on '$destroy', ->
      $document.off 'click'   
      
  
