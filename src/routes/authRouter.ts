import { Router } from 'express';
import { signUp, signIn } from '../controllers/authControllers.js';
import { authValidation } from '../middlewares/authMiddlewares.js';

const authRouter = Router();
authRouter.post("/signup", authValidation, signUp);
authRouter.post("/signin", authValidation, signIn);

export default authRouter;