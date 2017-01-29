var router = new require('koa-router')();


router.get('/userInfo', function (ctx) {
    console.info('234');
    ctx.body = {'name': 'cfl'};
});

module.exports = router;