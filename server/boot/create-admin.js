module.exports = function createAdmin(app) {
  var User = app.models.MyUser;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  var adminData = {username: 'admin', email: 'orwel.violette@gmail.com', password: 'admin'};

  User.findOrCreate({username: 'admin'}, adminData, function(err, admin) {
    if (err) throw err;

    //create the admin role
    Role.findOrCreate({name: 'admin'}, function(err, adminRole) {
      if (err) throw err;

      // give admin role to the admin
      var roleMappingData = {principalType: RoleMapping.USER, principalId: admin.id};

      adminRole.principals({where:roleMappingData}, function(err, principals) {
        if (err) throw err;
        if (principals.length > 0) {
          console.log('admin has already role');
          return;
        }
        adminRole.principals.create(roleMappingData, function(err, principal) {
          console.log('add admin role', principal);
          if (err) throw err;
        });
      });
    });
  });
};
