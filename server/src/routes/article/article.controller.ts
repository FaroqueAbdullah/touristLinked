import { Request, Response } from 'express';

const createArticle = async ( req: Request, res: Response ) : Promise<void>  => {
  res.status(201).send({ 'article' : "this is article" });
};

const getArticle = async ( req: Request, res: Response ) : Promise<void>  => {
  res.status(201).send({ 'article' : "this is article" });
};

const updateArticle = async ( req: Request, res: Response ) : Promise<void>  => {
  res.status(201).send({ 'article' : "this is article" });
};

const deleteArticle = async ( req: Request, res: Response ) : Promise<void>  => {
  res.status(201).send({ 'article' : "this is article" });
};

export {
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle
};

