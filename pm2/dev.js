module.exports = {
    "apps": [{
        "name": "koaService",
        "script": "/git/dev/koaService/app.js",
        "error_file": "/data/var/log/koa-service/koa-service.err.log",
        "out_file": "/data/var/log/koa-service/koa-service.out.log",
        "node_args": "--harmony",
        "env": {
            "NODE_ENV": "dev"
        }
    }]
}
