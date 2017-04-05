var router = new require('koa-router')();
var controllerUtil = require('../lib/controllerUtil.js')
var store = require('./houseStore.js');
var middleware = require("../middleware")


get('/buildData', async function (ctx) {
  return await store.buildData(ctx.request.body);

})

get('/list', async function () {
  return await store.list()
})


function get(path, controller) {
  router.get(path, controllerUtil.apiData(controller))
}

function post(path, controller) {
  router.post(path, controllerUtil.apiData(controller))
}

module.exports = router;
