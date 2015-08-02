angular.module 'association-magic-board'
.directive 'onReadFile', ($parse) ->
  restrict: 'A',
  scope: false,
  link: (scope, element, attrs) ->
    fn = $parse attrs.onReadFile

    element.on 'change', (onChangeEvent) ->
      reader = new FileReader()

      reader.onload = (onLoadEvent) ->
        scope.$apply ->
          fn(scope, {$fileContent: onLoadEvent.target.result});

      reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0])
