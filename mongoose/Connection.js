var config = require('config');


var mongoose = require('mongoose');

var conn = mongoose.createConnection(config.mongodb.uri, config.mongodb.options);

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {
    console.info('mongoose  connent');
});

module.exports = conn;
