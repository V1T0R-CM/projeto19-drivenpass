import { Router } from 'express';
import { signUp, signIn } from '../controllers/authControllers.js';
import { authValidation } from '../middlewares/authMiddlewares.js';
var authRouter = Router();
authRouter.post("/signup", authValidation, signUp);
authRouter.post("/signin", authValidation, signIn);
export default authRouter;
