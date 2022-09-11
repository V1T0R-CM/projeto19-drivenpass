import { Request, Response, NextFunction } from "express";
import { credentialsSchema } from "../schemas/credentialsSchema.js";
import { validateToken } from "../utils/token.js";

export function postCredentialValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const validation = credentialsSchema.validate(req.body);
    const account = validateToken(token);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };
    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}

export function credentialValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const account = validateToken(token);

    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}

export function credentialWithParamsValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const credentialId = req.params.id;
    const account = validateToken(token);

    if (!credentialId) throw { code: "BadRequest", message: "Não foi recebido nenhum id via params" };
    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}