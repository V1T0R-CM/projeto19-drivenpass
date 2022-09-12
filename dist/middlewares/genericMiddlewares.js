import { validateToken } from "../utils/token.js";
export function tokenMiddlewareValidation(req, res, next) {
    var token = req.headers.authorization.replace("Bearer ", "");
    var account = validateToken(token);
    if (!account)
        throw { code: "Unauthorized", message: "Token invalido" };
    res.locals.account = account;
    next();
}
export function paramsMiddlewareValidation(req, res, next) {
    var credentialId = req.params.id;
    if (!credentialId)
        throw { code: "BadRequest", message: "Não foi recebido nenhum id via params" };
    next();
}
