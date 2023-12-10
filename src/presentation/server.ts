import {CronService} from './cron/cron.service'
import {CheckService} from '../domain/use-cases/checks/check-service'
import {LogRepositoryImpl} from '../infrastructure/repositories/log.repository.impl'
import {FileSystemDatasource} from '../infrastructure/datasources/file-system.datasource'
import {EmailService} from './email/email.service'
import {SendEmailLogs} from '../domain/use-cases/email/send-email-logs'

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource())
const emailService = new EmailService()

export class Server {
    public static start() {
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

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.error(error)
        //         ).execute(url)
        //     }
        // )
    }
}