var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();
var middleware = require('./middleware')

var bodyParser = require('koa-bodyparser');

router.use('/api', api.routes());

var app = new koa();
app.use(bodyParser());
app.use(router.routes());
app.use(middleware.notFund)
app.listen(3000);
