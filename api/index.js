var router = new require('koa-router')();

router.use('/user', require("./user").routes());
router.use('/house', require("./house").routes());
//router.use('/weixin', require('./weixin').routes())

module.exports = router;
