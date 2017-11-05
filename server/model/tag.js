const mongoose = require('../db/mongodb.js');

const tagSchema = mongoose.Schema({
  name: String
}, {
  versionKey: false
});

const Tag = mongoose.model('tag', tagSchema, 'tag');

module.exports = Tag;