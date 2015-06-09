module.exports = function automigrate(server) {
  var dataSource = server.dataSources['association-magic-board']
  dataSource.automigrate(['User', 'Role', 'ACL', 'RoleMapping', 'AccessToken'], function err(err){console.log('automigrate err', err);});
};
