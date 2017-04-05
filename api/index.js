var router = new require('koa-router')();

router.use('/user', require("./user").routes());
router.use('/house', require("./house").routes());

module.exports = router;
