var router = new require('koa-router')();
var wechat = require('co-wechat');
var config = require('config');

module.exports = router;


router.get('/info', function (ctx) {
    ctx.body = {
        nickName: 'cfl'
    }
});

router.get('/wechat', wechat(config.weixin).middleware(function *() {
    console.info('message');
    console.info(this.weixin);
    this.body = 'hehe';
}));