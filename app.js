var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();
var config = require('config');
var wechat = require('./weixin/lib.js')(config.weixin);
var weixin = require('./weixin/weixinStore.js');
var co = require('co');


var bodyParser = require('koa-bodyparser');


router.use('/api', api.routes());


router.get('/weixin', wechat.middleware(weixin.event))

router.post('/weixin', wechat.middleware(weixin.event))

var app = new koa();

app.use(bodyParser());


app.use(router.routes());


app.listen(3000);