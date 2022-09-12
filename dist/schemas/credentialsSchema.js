import Joi from 'joi';
export var credentialsSchema = Joi.object({
    url: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    credentialTitle: Joi.string().required()
});
