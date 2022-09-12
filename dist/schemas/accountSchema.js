import Joi from 'joi';
export var accountSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});
