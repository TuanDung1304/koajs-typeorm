import 'colors'
import { config } from 'dotenv'
import * as Koa from 'koa'
import { DefaultContext, DefaultState } from 'koa'
import { DataSource } from 'typeorm'
config()

const {} = process.env

export const connectDB = async (
    app: Koa<DefaultState, DefaultContext>
): Promise<void> => {
    const appDataSource = new DataSource({
        type: 'sqlite',
        database: 'src/koa.db'
    })

    await appDataSource
        .initialize()
        .then(() => console.log('Synchronized with DB'.green.bold))
        .catch(e => console.log(e, 'Failed to sync with DB'.red.bold))

    app.context.db = appDataSource
}
