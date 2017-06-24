const mongoose = require('../db/mongodb.js');

const draftSchema = mongoose.Schema( {
  title: String,
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tag'
  }],
  createTime: {
    type: Date
  },
  lastEditTime: {
    type: Date,
    default: Date.now
  },
  excerpt: String,
  content: String,
  article: {
    type: Schema.Types.ObjectId,
    ref: 'tag'
  },
  draftPublished:Boolean
},{
  versionKey: false,
  skipVersioning: {
    tags: true
  }
});

draftSchema.set('toJSON', { getters: true, virtuals: true});
draftSchema.set('toObject', { getters: true, virtuals: true});
draftSchema.path('createTime').get(function (v) {
  return new Date(v).format('yyyy-MM-dd hh:mm:ss');
});
draftSchema.path('lastEditTime').get(function (v) {
  return new Date(v).format('yyyy-MM-dd hh:mm:ss');
});

const Draft =  mongoose.model('draft', draftSchema, 'draft');

module.exports = Draft;