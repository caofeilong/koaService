var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();

var bodyParser = require('koa-bodyparser');

router.use('/api', api.routes());

//
//router.get('/weixin', function (ctx, next) {
//    var g = wechat.middleware(weixin.event).bind(ctx, next)();
//    g.next()
//});

var app = new koa();
app.use(bodyParser());
app.use(router.routes());


app.listen(3000);