import {Server} from './presentation/server'
import {LogModel, MongoDatabase} from './data/mongo'
import {envs} from './config/plugins/envs.plugin'
import {PrismaClient} from '@prisma/client'

(async () => {
    main()
})()

async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    })

    // const prisma = new PrismaClient()
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         message: 'Test message desde Prisma',
    //         origin: 'App.ts',
    //         level: 'HIGH',
    //     }
    // })
    // console.log({newLog})
    //
    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'HIGH',
    //     }
    // })
    // console.log(logs)

    // const newLog = await LogModel.create({
    //     message: 'Test message desde Mongo',
    //     origin: 'App.ts',
    //     level: 'low',
    // })
    //
    // await newLog.save()

    // const logs = await LogModel.find()
    // console.log(logs[0].message)

    Server.start()
}