import express from 'express';

import { createArticle, getArticle, updateArticle, deleteArticle } from './article.controller';

const articleRouter = express.Router();

articleRouter.post('/createArticle' , createArticle)
articleRouter.get('/getArticle/:posid' , getArticle)
articleRouter.put('/updateArticle/:posid' , updateArticle)
articleRouter.delete('/deleteArticle/:posid' , deleteArticle)

export { articleRouter };