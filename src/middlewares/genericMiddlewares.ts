import { Request, Response, NextFunction } from "express";
import { validateToken } from "../utils/token.js";


export function tokenMiddlewareValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const account = validateToken(token);

    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}

export function paramsMiddlewareValidation(req: Request, res: Response, next: NextFunction) {
    const credentialId = req.params.id;

    if (!credentialId) throw { code: "BadRequest", message: "Não foi recebido nenhum id via params" };

    next()
}