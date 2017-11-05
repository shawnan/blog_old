const Article = require('../service/article');

const APIError = require('../middlewares/rest').APIError;

module.exports = {
  'GET /api/articles': async (ctx, next) => {
    ctx.response.status = 200;
    ctx.response.type = 'application/Json';
    ctx.response.body = Article.getArticles();
    // ctx.rest({
    //     article: Article.getArticles()
    // });
  },

  'POST /api/article': async (ctx, next) => {
    console.log('post');
    var result = Article.createArticle(
      ctx.request.body.title,
      ctx.request.body.tags,
      ctx.request.body.hidden,
      ctx.request.body.excerpt,
      ctx.request.body.content);
    ctx.response.status = 200;
    ctx.response.type = 'application/Json';
    ctx.response.body = result;
  },

  // 'POST /api/products': async (ctx, next) => {
  //     var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
  //     ctx.rest(p);
  // },

  // 'DELETE /api/products/:id': async (ctx, next) => {
  //     console.log(`delete product ${ctx.params.id}...`);
  //     var p = products.deleteProduct(ctx.params.id);
  //     if (p) {
  //         ctx.rest(p);
  //     } else {
  //         throw new APIError('product:not_found', 'product not found by id.');
  //     }
  // }
};