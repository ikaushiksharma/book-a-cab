import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { env } from '../constants';
import dB from './config/db';
import routes from './routes';
import { print } from './utils';
const app = express();
const PORT = env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: [env.CLIENT_URL],
  })
);

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Server is Up and Working!</h1>');
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

dB;

app.listen(PORT, () => {
  print.message(`Server is running on port ${PORT}`);
});
