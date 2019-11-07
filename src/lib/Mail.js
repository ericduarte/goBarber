import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    console.log(mailConfig);

    this.transponder = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth.user : null,
    });
  }

  sendMail(message) {
    return this.transponder.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
