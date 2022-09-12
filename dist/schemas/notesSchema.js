import Joi from 'joi';
export var notesSchema = Joi.object({
    title: Joi.string().max(50).required(),
    content: Joi.string().max(1000).required()
});
