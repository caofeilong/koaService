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

module.exports = router;