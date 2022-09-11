import { Request, Response, NextFunction } from "express";
import { wifisSchema } from "../schemas/wifisSchema.js";
import { validateToken } from "../utils/token.js";

export function postWifiValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const validation = wifisSchema.validate(req.body);
    const account = validateToken(token);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };
    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}