import { Router } from 'express';
import { postCredential, getAllCredentials, getCredential, deleteCredential } from '../controllers/credentialsControllers.js';
import { postCredentialValidation } from '../middlewares/credentialsMiddlewares.js';
import { tokenMiddlewareValidation, paramsMiddlewareValidation } from '../middlewares/genericMiddlewares.js';

const credentialsRouter = Router();

credentialsRouter.post("/credentials", postCredentialValidation, postCredential);
credentialsRouter.get("/credentials", tokenMiddlewareValidation, getAllCredentials)
credentialsRouter.get("/credentials/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, getCredential)
credentialsRouter.delete("/credentials/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, deleteCredential)

export default credentialsRouter;