import { Router } from 'express';
import { postCredential, getAllCredentials, getCredential, deleteCredential } from '../controllers/credentialsControllers.js';
import { postCredentialValidation, credentialValidation, credentialWithParamsValidation } from '../middlewares/credentialsMiddlewares.js';

const credentialsRouter = Router();

credentialsRouter.post("/credentials", postCredentialValidation, postCredential);
credentialsRouter.get("/credentials", credentialValidation, getAllCredentials)
credentialsRouter.get("/credentials/:id", credentialWithParamsValidation, getCredential)
credentialsRouter.delete("/credentials/:id", credentialWithParamsValidation, deleteCredential)

export default credentialsRouter;