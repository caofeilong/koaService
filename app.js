var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();
var config = require('config');
var wechat = require('co-wechat')(config.weixin);
var weixin = require('./weixin/weixinStore.js');
var co = require('co');


var bodyParser = require('koa-bodyparser');


router.use('/api', api.routes());

router.post('/weixin', function (ctx, next) {
    co(wechat.middleware(weixin.event).bind(ctx, next))
});

var app = new koa();

app.use(bodyParser());

app.use(router.routes());

app.listen(3000);