exports.notFund = (ctx) => {
  if (!ctx.body) {
    ctx.body = {
      success: false,
      data: {
        code: 101,
        msg: '方法不存在'
      }
    }
  }
}
