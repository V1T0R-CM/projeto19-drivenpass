import { Request, Response, NextFunction } from "express";
import { accountSchema } from "../schemas/accountSchema.js";

export async function authValidation(req: Request, res: Response, next: NextFunction) {
    const validation = accountSchema.validate(req.body);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };

    next()
}