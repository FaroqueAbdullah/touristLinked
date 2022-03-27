import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';

import { authRouter } from './routes/authentication/auth.router';
import { articleRouter } from './routes/article/article.router';

import * as swaggerdoc from './utils/swagger.json';


import { connect } from './config/db.js';

const PORT = process.env.SERVER_PORT || 4000;

const options: swaggerJSDoc.Options = swaggerdoc;

const swaggerSpec = swaggerJSDoc(options);

const app = express();
connect();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use('/auth' , authRouter);
app.use('/article' , articleRouter);

app.listen(PORT, () => {
  console.log(`server has started on ${PORT}`)
});