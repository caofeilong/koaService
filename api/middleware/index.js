exports.apiData = function (ctx, next) {
    ctx.body = {
        success: true,
        data: ctx.data
    }
}
