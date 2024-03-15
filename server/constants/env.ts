import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  CLIENT_URL: process.env.CLIENT_URL,
  MAIL_SECURE: process.env.MAIL_SECURE,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
  MAIL_HOST: process.env.MAIL_HOST,
};
