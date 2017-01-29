var koa = require('koa');
var api = require('./api');
var weixin = require('./weixin');
var Router = require('koa-router');
var router = new Router();

router.use('/api', api.routes());
router.use('/weixin', weixin.routes());

var app = new koa();

app.use(router.routes());


app.listen(3000);