
import BaseMedium from "./basemedium";
import { Retryable, BackOffPolicy } from 'typescript-retry-decorator';

import nodemailer from 'nodemailer';
class Email extends BaseMedium {


    constructor(public configuration: any) {
        super(configuration);
        console.log(configuration);
        this.senderObject = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: configuration.email,
                pass: configuration.password
            }
        });
    }
    @Retryable({ maxAttempts: 3 })
    async sendMessage(receiver: any, message: any) {
        try {
            const mailOptions = {
                from: this.configuration.email,
                to: receiver.email,
                subject: message.subject,
                html: message.message
            };
            const result = await this.senderObject.sendMail(mailOptions);
            return true;
        } catch (e) {
            throw new Error('Retry failed '+e);
        }
    }
    initializeConfiguration(): void {

    }

}
export default Email;