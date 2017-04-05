var mongoose = require('mongoose');
var conn = require('../Connection');


var userSchema = new mongoose.Schema({
  uname: String,
  pwd: String
});


module.exports = conn.model('account', userSchema);
