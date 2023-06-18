const Koa = require('koa');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();

    server.use(async (ctx, next) => {
        // Custom middleware for logging or other processing
        console.log(`Received request: ${ctx.method} ${ctx.url}`);

        await next();
    });

    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false; // Bypass Koa's built-in response handling
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
