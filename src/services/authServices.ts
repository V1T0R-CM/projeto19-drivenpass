import * as authRepositories from "../repositories/authRepositories.js";
import { IAccountData } from "../types/accountTypes.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcrypt";

export async function registerAccount(accontData: IAccountData) {
    const user = await authRepositories.getByEmail(accontData.email);
    const passwordHash = bcrypt.hashSync(accontData.password, 10);
    if (user) throw { code: "Conflict", message: "Email já esta cadastrado" };

    await authRepositories.insert(accontData.email, passwordHash);
}

export async function loginAccount(accontData: IAccountData) {
    const user = await authRepositories.getByEmail(accontData.email);
    const comparePasswords = bcrypt.compareSync(accontData.password, user.password);

    if (!user) throw { code: "NotFound", message: "Email não esta cadastrado" };
    if (!comparePasswords) throw { code: "Unauthorized", message: "Não foi possivel acessar conta" }

    return { token: generateToken(user.id, user.email) }
}