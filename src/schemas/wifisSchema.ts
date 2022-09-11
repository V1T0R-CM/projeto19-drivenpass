import Joi from 'joi';
import { IWifiBody } from '../types/wifiTypes.js';

export const wifisSchema = Joi.object<IWifiBody>({
    name: Joi.string().required(),
    password: Joi.string().required(),
    wifiTitle: Joi.string().required()
});
