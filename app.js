var koa = require('koa');
var api = require('./api');
var weixin = require('./weixin');
var Router = require('koa-router');
var router = new Router();
var config = require('config');
var wechat = require('co-wechat')(config.weixin);

router.use('/api', api.routes());
router.use('/weixin', weixin.routes());

var app = new koa();

app.use(wechat.middleware(function *() {
    this.body = 'hehe';
}));

app.use(router.routes());


app.listen(3000);