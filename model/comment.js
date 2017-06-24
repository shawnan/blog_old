const mongoose = require('../db/mongodb.js');

const comment = mongoose.Schema({
  article: {
    id: Schema.Types.ObjectId,
    ref: 'article'
  },
  message:String,
  respondTo: {
    id: Schema.Types.ObjectId,
    ref: 'comment'
  },
  createTime: {
    type: Date
  },
  author:String,
  authorAvatar:{
    type: String,
    default: ''
  },
  duoshuoKey: {
    type: String,
    default: ''
  },
  likes:{
    type: Number,
    default: 0
  }
});

const Comment = mongoose.model('comment', commentSchema, 'comment');

module.exports = Comment;