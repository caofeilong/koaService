var User = require('../../mongoose/schemas/User.js')


exports.saveUser = function (userInfo) {
    return User.create(userInfo)
};


exports.userList = function () {
    return User.find().select('_id uname pwd');
};


exports.delete = function (_id) {
    return User.remove({_id});
};


