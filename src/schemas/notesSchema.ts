import Joi from 'joi';
import { INoteBody } from '../types/noteTypes.js';

export const notesSchema = Joi.object<INoteBody>({
    title: Joi.string().max(50).required(),
    content: Joi.string().max(1000).required()
});
