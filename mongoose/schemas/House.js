var mongoose = require('mongoose');
var conn = require('../Connection');


var houseSchema = new mongoose.Schema({
  projectName: {type: String, index: {unique: true}},
  dev: String,
  address: String,
  area: String,
  phone: String
}, {
  strict: true,
  toObject: {
    transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      return ret
    }
  }
});


module.exports = conn.model('house', houseSchema);
