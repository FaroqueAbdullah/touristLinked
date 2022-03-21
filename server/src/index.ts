import express, { Request, Response } from 'express';

import { authRouter } from './routes/authentication/auth.router';

const PORT = process.env.SERVER_PORT || 4000;

const app = express()

app.use('/auth' , authRouter)

app.listen(PORT, () => {
  console.log(`server has started on ${PORT}`)
})