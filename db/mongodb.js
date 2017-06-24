var db = null;
var url = 'mongodb://localhost:27017/blogNew';
var mongoose = require('mongoose');

mongoose.connect(url);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});

module.exports = mongoose;
