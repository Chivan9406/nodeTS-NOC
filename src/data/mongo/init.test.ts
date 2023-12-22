import {MongoDatabase} from "./init"
import mongoose from 'mongoose'

describe('init MongoDB', () => {
    afterAll(() => {
        mongoose.connection.close()
    })

    test('should connect to MongoDB', async () => {
        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        })

        expect(connected).toBe(true)
    })

    test('should throw an error', async () => {
        try {
            const connected = await MongoDatabase.connect({
                dbName: process.env.MONGO_DB_NAME!,
                mongoUrl: 'mongodb://ivan:123456789@localhosasdsast:27017'
            })

            expect(true).toBe(false)

        } catch (e) {
            expect(true).toBe(true)
        }
    })
})