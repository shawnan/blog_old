module.exports = {
    'GET /index': async (ctx, next) => {
        await ctx.render('index.html');
    }
};