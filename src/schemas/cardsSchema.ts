import Joi from 'joi';
import { ICardBody } from '../types/cardTypes.js';

export const cardsSchema = Joi.object<ICardBody>({
    number: Joi.string().length(16).pattern(/[0-9]/).required(),
    holderName: Joi.string().required(),
    securityCode: Joi.string().length(3).pattern(/[0-9]/).required(),
    expirationDate: Joi.string().pattern(/[00-99]\/[00-99]/).required(),
    password: Joi.string().pattern(/[0-9]/).required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid("crédito", "débito", "ambos").required()
});
