module.exports = (server) ->
  dataSource = server.dataSources.association-magic-board
  dataSource.automigrate ['User', 'Application', 'Role', 'ACL', 'RoleMapping', 'AccessToken']
