const serve = require('koa-static');
const Koa = require('koa');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

// static
app.use(serve(__dirname + '/views'));

// views
app.use(views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
}));

// add controller
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');