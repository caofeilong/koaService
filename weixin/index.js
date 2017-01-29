var router = new require('koa-router')();


module.exports = router;


router.get('/info', function (ctx) {
    ctx.body = {
        nickName: 'cfl'
    }
});
