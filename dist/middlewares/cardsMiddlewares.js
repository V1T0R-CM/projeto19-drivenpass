import { cardsSchema } from "../schemas/cardsSchema.js";
import { validateToken } from "../utils/token.js";
export function postCardValidation(req, res, next) {
    var token = req.headers.authorization.replace("Bearer ", "");
    var validation = cardsSchema.validate(req.body);
    var account = validateToken(token);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    if (!account)
        throw { code: "Unauthorized", message: "Token invalido" };
    res.locals.account = account;
    next();
}
