var koa = require('koa');
var api = require('./api');
var Router = require('koa-router');
var router = new Router();

var bodyParser = require('koa-bodyparser');

router.use('/api', api.routes());

var app = new koa();
app.use(bodyParser());
app.use(router.routes());


app.listen(3000);