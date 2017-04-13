var router = new require('koa-router')();
var controllerUtil = require('../lib/controllerUtil.js')
var store = require('./store.js');


post('/register', async function (ctx) {
  await store.saveUser(ctx.request.body);
  return {
    code: 200,
    msg: '註冊成功'
  }
})

get('/list', async function () {
  return await store.userList()
})


get('/delete', async function (ctx) {
  return await store.delete(ctx.query._id);
})


function get(path, controller) {
  router.get(path, controllerUtil.apiData(controller))
}

function post(path, controller) {
  router.post(path, controllerUtil.apiData(controller))
}

module.exports = router;
