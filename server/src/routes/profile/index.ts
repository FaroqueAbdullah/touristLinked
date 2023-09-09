import  express from "express";
import { authenticateRequest } from "../../middleware/authenticate";
import { createProfile, deleteProfile, getProfile, updateProfile } from "./controller";

const profileRoute = express.Router();

profileRoute.post("/:userId/create", createProfile);
profileRoute.get("/:userId/get", getProfile);
profileRoute.put("/:userId/update", updateProfile);
profileRoute.delete("/:userId/delete", deleteProfile);

const init = async (app: any) => {
  app.use("/api/profile", authenticateRequest, profileRoute);
  return app;
};

export { init };