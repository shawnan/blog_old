const utils = require('../utils/index');
const articleDao = require('../model/article');

function* saveArticle(title, tags, hidden, excerpt, content) {
  console.log('create');
  const article = new Article({
    title: title,
    tags: tags,
    hidden: hidden,
    excerpt: excerpt,
    content: content,

    visits: 0,
    comments: [],
    createTime: new Date(),
    lastEditTime: null
  });

  const result = yield article.save().catch(err => {
    utils.logger.error(err);
    this.throw(500,'内部错误')
  });

  utils.print(result);

  return result;
}

function* getArticles(options){
  console.log('getArticles');
    let articleArr = yield articleDao.find(
    ).select('title createTime lastEditTime')
      .sort({ createTime: -1})
      .exec().catch(err => {
        utils.logger.error(err);
        this.throw(500,'内部错误')
      });
    utils.print(articleArr);
    return articleArr;
}

module.exports = {
  getArticles: (options) => {
    return getArticles(options);
  },

  getArticle: (id) => {
    // let article = (yield Article.findOne({
    //   _id:id,
    //   hidden:false
    // })
    // .populate('tags')
    // .select('title visits tags createTime lastEditTime excerpt content')
    // .exec().catch(err => {
    //   utils.logger.error(err);
    //   this.throw(500,'内部错误')
    // }));

    // if (article) {
    //   article = article.toObject();
    //   return article;
    // } else {
    //   return null;
    // }
  },

  createArticle: (title, tags, hidden, excerpt, content) => {
    return saveArticle(title, tags, hidden, excerpt, content);
  },

  deleteArticle: (id) => {
      
  }
};