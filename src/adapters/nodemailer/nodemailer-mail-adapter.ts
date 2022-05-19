import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "14cb3c81c01283",
      pass: "77997cafa7b1dd"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oii@feedget.com>',
            to: 'Arthur Machado <contatodesenvolvedorarthur@gmail.com>',
            subject,
            html: body,
        })


    };
}