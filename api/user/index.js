var router = new require('koa-router')();

var store = require('./store.js');

router.get('/userInfo', function (ctx) {
    console.info('234');
    ctx.body = {'name': 'cfl'};
});


router.post('/register', async function (ctx) {
    await store.saveUser(ctx.request.body);
    ctx.body = {
        success: true,
        data: {
            code: 200,
            msg: '註冊成功'
        }
    }
});


router.get('/list', async function (ctx) {
    var obj = await store.userList();
    ctx.body = {
        success: true,
        data: obj
    }
});



router.get('/delete', async function (ctx) {
    var obj = await store.delete(ctx.query._id);
    ctx.body = {
        success: true,
        data: obj
    }
});


module.exports = router;