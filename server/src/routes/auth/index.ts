import  express from "express";
import { 
  forgotPasswordSchema, 
  loginUserSchema, 
  registerUserSchema, 
  resetPasswordSchema, 
  tokenVerifyUserSchema 
} from "../../schemas/user.schema";
import { validate } from "../../middleware/validate";
import { 
  registerUserHandler, 
  loginHandler, 
  forgotPasswordHandler, 
  verifyTokenHandler, 
  resetPasswordHandler, 
  activateAccountHandler 
} from "./controller";

const authRoute = express.Router();

authRoute.post("/register", validate(registerUserSchema),registerUserHandler);
authRoute.post("/login", validate(loginUserSchema), loginHandler);
authRoute.post("/forgot-password", validate(forgotPasswordSchema), forgotPasswordHandler);
authRoute.post("/verify-token", validate(tokenVerifyUserSchema), verifyTokenHandler);
authRoute.post("/reset-password", validate(resetPasswordSchema), resetPasswordHandler);
authRoute.post("/activate-account", validate(tokenVerifyUserSchema), activateAccountHandler);

const init = async (app: any) => {
  app.use("/api/auth", authRoute);
  return app;
};

export { init };