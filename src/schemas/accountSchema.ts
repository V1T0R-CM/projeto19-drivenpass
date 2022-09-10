import Joi from 'joi';
import { IAccountData } from '../types/accountTypes.js';

export const accountSchema = Joi.object<IAccountData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});
