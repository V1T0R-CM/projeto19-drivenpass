import { accountSchema } from "../schemas/accountSchema.js";
export function authValidation(req, res, next) {
    var validation = accountSchema.validate(req.body);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    next();
}
