angular.module 'my-app.homepage'
.directive 'dciInput', ($q, Member) ->
    require: 'ngModel'
    link: (scope, elm, attrs, ctrl) ->
      ctrl.$asyncValidators.dci_number = (modelValue, viewValue) ->
        def = $q.defer()
        Member.find
          filter:
            where:
              dci_number: modelValue
            limit: 1
        , (members) ->
          console.log members[0]
          console.log 'scope.ID', scope.member.id
          console.log 'member.ID', members[0]?.id
          if members[0] and not (scope.member.id and scope.member.id is members[0].id)
            def.reject()
          else
            def.resolve()
        , (err) ->
          console.log 'pou'
          def.reject()
        def.promise
