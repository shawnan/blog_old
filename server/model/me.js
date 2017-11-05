const mongoose = require('../db/mongodb.js');

const meSchema = mongoose.Schema({
  content: String,
},{
  versionKey: false
});

const Me = mongoose.model('me', meSchema, 'me');

module.exports = Me;