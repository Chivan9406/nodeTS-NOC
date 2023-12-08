import {CronService} from './cron/cron-service'
import {CheckService} from '../domain/use-cases/checks/check-service'
import {LogRepositoryImpl} from '../infrastructure/repositories/log.repository.impl'
import {FileSystemDatasource} from '../infrastructure/datasources/file-system.datasource'

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource())

export class Server {
    public static start() {
        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'

                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.error(error)
                ).execute(url)
            }
        )
    }
}