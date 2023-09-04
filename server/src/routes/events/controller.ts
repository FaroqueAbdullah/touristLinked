import  express, { Request, Response, NextFunction, RequestHandler  } from "express";

import 'dotenv/config';



const eventRoute = express.Router();


const createEvent =async (req: Request, res: Response) => {
  
}

const getAllEvents =async (req: Request, res: Response) => {
  
}

const getEvent =async (req: Request, res: Response) => {
  
}

const updateEvent =async (req: Request, res: Response) => {
  
}

const deleteEvent =async (req: Request, res: Response) => {
  
}


eventRoute.post("/create", createEvent);
eventRoute.get("/:userId/getall", getAllEvents);
eventRoute.get("/:userId/:eventId/get", getEvent);
eventRoute.put("/:userId/:eventId/update", updateEvent);
eventRoute.delete("/:userId/:eventId/delete", deleteEvent);


export default eventRoute;

