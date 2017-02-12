var router = new require('koa-router')();


router.use('/user', require("./user").routes());


module.exports = router;