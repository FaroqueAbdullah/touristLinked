import  express from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { handleValidation } from "../../common/middlewares";

const { ObjectId } = require("mongoose").Types;
const authRoute = express.Router();
const ModelName = 'User';



authRoute.post("/register", (req: any, res: any) => res.send("Hello register!"));
authRoute.post("/login", (req: any, res: any) => res.send("Hello login!"));
authRoute.post("/verify-token", (req: any, res: any) => res.send("Hello verify-token!"));
authRoute.post("/forgot-password", (req: any, res: any) => res.send("Hello forgot-password!"));
authRoute.post("/reset-password", (req: any, res: any) => res.send("Hello reset-password!"))
authRoute.post("/deactivate-account", (req: any, res: any) => res.send("Hello deactivate-account!"))
authRoute.post("/check-username", (req: any, res: any) => res.send("Hello check-username!"));


export default authRoute;

