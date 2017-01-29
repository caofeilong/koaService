var router = new require('koa-router')();
var wechat = require('wechat');
var config = require('config');

module.exports = router;


router.get('/info', function (ctx) {
    ctx.body = {
        nickName: 'cfl'
    }
});

router.get('/wechat', wechat(config.weixin, function (req, res) {
    var message = req.weixin;
    console.info('message');
    console.info(message);
    if (message.FromUserName === 'cc') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
    }
}));