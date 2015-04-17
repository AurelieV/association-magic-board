angular.module 'my-app.utils.selectableList'
.directive 'selectableList', () ->
  restric: 'AEC'
  transclude: true
  controller: 'selectableListController'
  link: ($scope) ->
    currentSelectedElement = null

    this.select = (element) ->
      currentSelectedElement = element
    this.unselect = ->
      currentSelectedElement = null
    this.isSelected = (element) ->
      element is currentSelectedElement
  
