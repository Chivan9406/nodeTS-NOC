import {PostgresLogDatasource} from './postgres-log.datasource'
import {LogEntity, LogSeverityLevel} from '../../domain/entities/log.entity'
import {PrismaClient, SeverityLevel} from '@prisma/client'

describe('PostgresLogDatasource', () => {
    const prisma = new PrismaClient()
    const logDataSource = new PostgresLogDatasource()
    const log = new LogEntity({
        level: LogSeverityLevel.medium,
        message: 'test message',
        origin: 'postgres-log.datasource.test.ts',
    })

    beforeAll(async () => {
        await prisma.$connect()
    })

    afterEach(async () => {
        await prisma.logModel.deleteMany({})
    })

    afterAll(async () => {
        await prisma.$disconnect()
    })

    test('should create a log', async () => {
        const logSpy = jest.spyOn(console, 'log')

        await logDataSource.saveLog(log)

        expect(logSpy).toHaveBeenCalled()
        expect(logSpy).toHaveBeenCalledWith('Postgres Log created', expect.any(Number))
    })

    test('should get logs', async () => {
        const severityEnum = {
            low: SeverityLevel.LOW,
            medium: SeverityLevel.MEDIUM,
            high: SeverityLevel.HIGH
        }

        await logDataSource.saveLog(log)

        const logs = await logDataSource.getLogs(LogSeverityLevel.medium)

        expect(logs).toHaveLength(1)
        expect(logs[0].level).toBe(severityEnum.medium)
    })
})