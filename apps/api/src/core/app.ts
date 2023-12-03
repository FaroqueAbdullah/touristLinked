import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import ExpressPinoLogger from 'express-pino-logger';
import compression from 'compression';

import 'dotenv/config';

const logger = ExpressPinoLogger({
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      query: req.query,
      params: req.params,
      headers: {
        'user-agent': req.headers['user-agent'],
        'session-id': req.headers['session-id'] ?? '',
        host: req.headers.host,
      },
      remoteAddress: req.remoteAddress,
    }),
    res: (res) => ({
      statusCode: res.statusCode,
      header: {
        date: res.headers.date,
        'x-correlation-id': res.headers['x-correlation-id'],
      },
    }),
  },
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
});

const app = express();

app.use(
  cors({
    origin: ['http://localhost:8082'],
    credentials: true,
  }),
);

app.use(compression());
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(logger);

export default app;
