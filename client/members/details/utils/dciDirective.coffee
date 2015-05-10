angular.module 'association-magic-board.member'
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
          if members[0] and not (scope.member.id and scope.member.id is members[0].id)
            def.reject()
          else
            def.resolve()
        , (err) ->
          def.reject()
        def.promise
