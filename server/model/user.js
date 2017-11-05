const mongoose = require('../db/mongodb.js');

const userSchema = mongoose.Schema({
  name: String,
  username:String,
  password:String,
  avatar:String,
  createTime: String
});

const User = mongoose.model('user', userSchema, 'user');;


module.exports = User;