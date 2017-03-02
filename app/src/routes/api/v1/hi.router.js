const Router = require('koa-router');
var logger = require('logger');

const router = new Router({
    prefix: '/node-br-skelly',
});

class HiRouter {

    static hi(ctx) {
        ctx.body = {
            hi: 'Lucas Rules'
        };
    }

    static gi(ctx) {
      // logger.info(ctx);
      var msg = "";
      if(ctx.params && ctx.params.msg) {
        msg = ctx.params.msg;
      }
      ctx.body = {
         test: 'Lucas is a ' + msg
      };
    }
}

router.get('/hi', HiRouter.hi);
router.get('/gi/:msg', HiRouter.gi);


module.exports = router;
