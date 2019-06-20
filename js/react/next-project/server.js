const Koa = require('koa');
const Router = require('koa-router')
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = new Koa();

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
});

// const server = new Koa()
// const router = new Router()

// router.get('/test/:id', (ctx) => {
//   const id = ctx.params.id
//   ctx.body = `<p>request /test${id}</p>`
// })

// // server.use(async(ctx,next)=> {
// //   const path = ctx.path
// //   const method = ctx.method
// //   ctx.body = `<span>Koa Render ${method} ${path}</span>`
// //   await next()
// // })

// server.use(router.routes())
// server.listen(3000, () => console.log(`server is running on 3000`))