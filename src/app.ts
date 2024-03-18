import * as Koa from 'koa'
import { DefaultState, DefaultContext, ParameterizedContext } from 'koa'
import * as Router from 'koa-router'
import 'colors'
import './entities/index'
import { connectDB } from './entities/index'

const PORT = 3333

const startApp = async () => {
    const app: Koa<DefaultState, DefaultContext> = new Koa()

    const router: Router = new Router()

    await connectDB(app)

    router.get(
        '/',
        async (
            ctx: ParameterizedContext<DefaultState, DefaultContext>,
            next
        ) => {
            await next()
            ctx.body = { msg: 'Hello anh em' }
            console.log('done')
        }
    )

    router.get('/', async (ctx, next) => {
        const start = Date.now()
        console.log('before', ctx.body)
        await next()
        console.log('after', ctx.body)
        const ms = Date.now() - start
        ctx.set('X-Respond-Time', `${ms}ms`)
    })

    router.get('/', async ctx => {
        ctx.body = 'Hello world'
    })

    app.use(router.routes()).use(router.allowedMethods())

    app.listen(PORT).on('listening', () =>
        console.log(
            `server started on port ${PORT} go to http://localhost:${PORT}`.blue
                .bold
        )
    )
}

startApp()
