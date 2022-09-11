import Joi from 'joi';
import { ICredentialBody } from '../types/credentialTypes';

export const credentialsSchema = Joi.object<ICredentialBody>({
    url: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    credentialTitle: Joi.string().required()
});
