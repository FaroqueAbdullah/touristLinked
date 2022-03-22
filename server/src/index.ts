import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

import { authRouter } from './routes/authentication/auth.router';
import { articleRouter } from './routes/article/article.router';


import { connect } from './config/db.js';

const PORT = process.env.SERVER_PORT || 4000;

const app = express();
connect();

app.use(bodyParser.json());
app.use('/auth' , authRouter);
app.use('/article' , articleRouter);

app.listen(PORT, () => {
  console.log(`server has started on ${PORT}`)
});