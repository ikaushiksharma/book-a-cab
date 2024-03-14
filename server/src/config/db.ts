import mongoose from 'mongoose';
import { print } from '../utils';
mongoose.connect(`${process.env.MONGO_URI}`);
const dB = mongoose.connection;

dB.on('error', () => {
  print.error('error connecting to db');
});

dB.once('open', function () {
  print.message('Successfully connected to database');
});

export default dB;
