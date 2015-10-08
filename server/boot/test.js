module.exports = function test(app, next) {
  var User = app.models.MyUser;
  User.find({include:'roles'}, function(users) {
    console.log('users', users);
    next()
  });
};
