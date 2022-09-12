import Joi from 'joi';
export var wifisSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    wifiTitle: Joi.string().required()
});
