import express from 'express';

import { createArticle, getArticle, updateArticle, deleteArticle } from './article.controller';
import { verifyToken } from '../../middleware/auth';

const articleRouter = express.Router();

articleRouter.post('/createArticle' , verifyToken, createArticle);
articleRouter.get('/getArticle/:posid' , getArticle);
articleRouter.put('/updateArticle/:posid' , verifyToken, updateArticle);
articleRouter.delete('/deleteArticle/:posid' , verifyToken, deleteArticle);

export { articleRouter };