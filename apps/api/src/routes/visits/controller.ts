import express, { Request, Response } from 'express';

import 'dotenv/config';

const visitRoute = express.Router();

// functions to make CRUD operation on countries

const createCountryVisit = async (req: Request, res: Response) => {
  return res.status(201).send({
    status: 'ok',
    message: 'CountryVisit created Succesfully',
  });
};

const getAllCountryVisits = async () => {};

const getCountryVisit = async () => {};

const updateCountryVisit = async () => {};

const deleteCountryVisit = async () => {};

// functions to make CRUD operation on locations

const createLocationVisit = async (res: Response) => {
  return res.status(201).send({
    status: 'ok',
    message: 'CountryVisit created Succesfully',
  });
};

const getAllLocationVisits = async () => {};

const getLocationVisit = async () => {};

const updateLocationVisit = async () => {};

const deleteLocationVisit = async () => {};

visitRoute.post('/country/:userId/create', createCountryVisit);
visitRoute.get('/country/:userId/getall', getAllCountryVisits);
visitRoute.get('/country/:userId/:countryVisitId/get', getCountryVisit);
visitRoute.put('/country/:userId/:countryVisitId/update', updateCountryVisit);
visitRoute.delete(
  '/country/:userId/:countryVisitId/delete',
  deleteCountryVisit,
);

visitRoute.post('/location/:userId/create', createLocationVisit);
visitRoute.get('/location/:userId/getall', getAllLocationVisits);
visitRoute.get('/location/:userId/:locationVisitId/get', getLocationVisit);
visitRoute.put(
  '/location/:userId/:locationVisitId/update',
  updateLocationVisit,
);
visitRoute.delete(
  '/location/:userId/:locationVisitId/delete',
  deleteLocationVisit,
);

export default visitRoute;
