exports.apiData = function (controller) {
    return async function (ctx) {
        try {
            var data = await controller(ctx)
            ctx.body = {
                success: true,
                data
            }
        } catch (error) {
            ctx.body = {
                success: false,
                error
            }
        }
    }
}