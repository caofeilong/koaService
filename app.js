var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();
var config = require('config');
//var wechat = require('co-wechat')(config.weixin);
//var weixin = require('./weixin/weixinStore.js');

require('./mongoose/Connection.js');

var bodyParser = require('koa-bodyparser');


router.use('/api', api.routes());

var app = new koa();

app.use(bodyParser());

app.use(router.routes());

app.listen(3000);