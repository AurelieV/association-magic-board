angular.module 'my-app.utils'
.controller 'selectableListController', () ->
    currentSelectedElement = null
    this.select = (element) ->
      console.log 'select ok'
      currentSelectedElement = element
    this.unselect = ->
      currentSelectedElement = null
    this.isSelected = (element) ->
      element is currentSelectedElement

