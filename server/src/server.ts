import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { env } from '../constants';
import dB from './config/db';
import routes from './routes';
const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Server is Up and Working!');
});

dB;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
