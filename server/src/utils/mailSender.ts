import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { htmlTemplate } from './helper';
import { env } from '../../constants';
export default async function sendMail({
  email,
  source,
  destination,
  startTime,
  endTime,
  price,
}: {
  email: string;
  source: string;
  destination: string;
  startTime: string;
  endTime: string;
  price: number;
}) {
  try {
    const transport = nodemailer.createTransport({
      host: env.MAIL_HOST,
      service: env.MAIL_SERVICE,
      secure: Boolean(env.MAIL_SECURE),
      auth: {
        user: env.MAIL_USER,
        pass: env.MAIL_PASS,
      },
    });
    const mailOptions: Mail.Options = {
      from: env.MAIL_USER,
      to: email,
      subject: `Booking Confirmed!🚀`,
      html: htmlTemplate(source, destination, startTime, endTime, price),
    };

    await transport.sendMail(mailOptions);
    return { message: 'Success!', status: 200 };
  } catch (err: any) {
    return new Error(err.message);
  }
}
