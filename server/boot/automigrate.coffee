module.exports = (server) ->
  console.log 'poue'
  dataSource = server.dataSources.association-magic-board
  dataSource.automigrate ['User', 'Application', 'Role', 'ACL', 'RoleMapping', 'AccessToken'], (err) ->
    console.log 'automigrate err', err
