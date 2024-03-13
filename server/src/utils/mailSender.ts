import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { htmlTemplate } from './helper';
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
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailOptions: Mail.Options = {
    from: process.env.MAIL_USER,
    to: email,
    subject: `Booking Confirmed!🚀`,
    html: htmlTemplate(source, destination, startTime, endTime, price),
  };

  try {
    await transport.sendMail(mailOptions);
    return { message: 'Success!', status: 200 };
  } catch (err: any) {
    return { message: err.message, status: 500 };
  }
}
