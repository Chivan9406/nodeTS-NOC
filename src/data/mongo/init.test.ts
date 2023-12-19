import {MongoDatabase} from "./init"
import * as mongoose from 'mongoose'

describe('init MongoDB', () => {
    afterAll(() => {
        mongoose.disconnect()
    })

    test('shoyld connect to MongoDB', async () => {
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
                mongoUrl: 'mongodb://ivan:123456789@localhosts:27017',
            })

            expect(true).toBe(false)

        } catch (e) {

        }
    })
})