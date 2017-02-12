var User = require('../../mongoose/schemas/User.js')


exports.saveUser = function (userInfo) {
    return User.create(userInfo)
};