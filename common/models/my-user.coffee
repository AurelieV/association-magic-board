module.exports = (MyUser) ->
  MyUser.validatesUniquenessOf('dci_number')
