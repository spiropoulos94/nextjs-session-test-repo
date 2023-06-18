const Koa = require('koa');
const next = require('next');
const { ironSession } = require('iron-session/koa');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();

    server.use(ironSession({
        cookieName: 'iron-session/examples/next',
        password: "aytoeinaitogamhmenopasswordgiatoironsession",
        cookieOptions: {
            secure: !dev,
        },
    }));

    server.use(async (ctx, next) => {
        // Custom middleware for logging or other processing
        console.log(`Received request: ${ctx.method} ${ctx.url}`);

        ctx.session = {
            name: "gianni"
        }

        await ctx.session.save();

        // Pass session data to Next.js context
        ctx.req.session = ctx.session;

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
