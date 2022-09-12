import { wifisSchema } from "../schemas/wifisSchema.js";
import { validateToken } from "../utils/token.js";
export function postWifiValidation(req, res, next) {
    var token = req.headers.authorization.replace("Bearer ", "");
    var validation = wifisSchema.validate(req.body);
    var account = validateToken(token);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    if (!account)
        throw { code: "Unauthorized", message: "Token invalido" };
    res.locals.account = account;
    next();
}
