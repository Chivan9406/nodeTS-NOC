import {LogRepositoryImpl} from '../infrastructure/repositories/log.repository.impl'
import {FileSystemDatasource} from '../infrastructure/datasources/file-system.datasource'
import {EmailService} from './email/email.service'
import {LogSeverityLevel} from '../domain/entities/log.entity'

const logRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
    // new MongoLogDatasource()
)
const emailService = new EmailService()

export class Server {
    public static async start() {
        console.log('Server started...')

        // const emailService = new EmailService()
        // emailService.sendEmail({
        //     to: 'ivan9406@hotmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //         <h3>Logs de sistema NOC</h3>
        //         <p>Algo para enviar en el cuerpo del correo</p>
        //         <p>Ver logs adjuntos</p>
        //     `
        // })

        // const emailService = new EmailService(fileSystemLogRepository)
        // emailService.sendEmailWithFileSystemLogs(
        //     ['ivan9406@hotmail.com']
        // )

        // new SendEmailLogs(emailService, fileSystemLogRepository).execute('ivan9406@hotmail.com')

        // const logs = await logRepository.getLogs(LogSeverityLevel.low)
        // console.log(logs)

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //
        //         new CheckService(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.error(error)
        //         ).execute(url)
        //     }
        // )
    }
}