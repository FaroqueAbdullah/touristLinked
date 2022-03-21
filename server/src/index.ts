import express, { Request, Response } from 'express';

const PORT = process.env.SERVER_PORT || 4000;

const app = express()

app.get('/' , (req: Request, res: Response) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('server has started sadf')
})