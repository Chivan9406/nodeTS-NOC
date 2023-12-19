import {envs} from './envs.plugin'

describe('envs.plugin', () => {
    test('should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'chivan9406@gmail.com',
            MAILER_SECRET_KEY: 'ggyimttnvvzfmyud',
            PROD: false,
            MONGO_URL: 'mongodb://ivan:123456789@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'ivan',
            MONGO_PASS: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5432/NOC',
            POSTGRES_USER: 'postgres',
            POSTGRES_DB: 'NOC-TEST',
            POSTGRES_PASSWORD: '123456789'
        })
    })

    test('should return error if not env', async () => {
        jest.resetModules()
        process.env.PORT = 'ABC'

        try {
            await import('./envs.plugin')
            expect(true).toBe(false)

        } catch (e) {
            expect(`${e}`).toContain('"PORT" should be a valid integer')
        }
    })
})