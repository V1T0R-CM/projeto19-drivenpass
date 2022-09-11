import * as credentialsRepositories from "../repositories/credentialsRepositories.js";
import { getById as getUserById } from "../repositories/authRepositories.js";
import { ICredentialData } from "../types/credentialTypes.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const CRRYPTR_SECRET_KEY = process.env.CRRYPTR_SECRET_KEY;
const cryptr = new Cryptr(CRRYPTR_SECRET_KEY);

export async function createCredential(credentialData: ICredentialData) {
    const existingTitle = await credentialsRepositories.getByTitleAndId(credentialData.accountId, credentialData.credentialTitle);

    if (existingTitle) throw { code: "Conflict", message: "Esse titulo já existe" };

    await credentialsRepositories.insert({ ...credentialData, password: cryptr.encrypt(credentialData.password) });
}

export async function getAllCredentialsById(accountId: number) {
    const user = await getUserById(accountId);
    let result: ICredentialData[];

    if (!user) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma conta" };

    result = await credentialsRepositories.getAllById(accountId);

    return result.map(credential => {
        delete credential["accountId"];

        return { ...credential, password: cryptr.decrypt(credential.password) }
    })
}

export async function getCredentialById(credentialId: number, accountId: number) {
    const credential = await credentialsRepositories.getById(credentialId);

    if (!credential) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (credential.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    delete credential["accountId"];

    return { ...credential, password: cryptr.decrypt(credential.password) }
}

export async function deleteCredentialById(credentialId: number, accountId: number) {
    const credential = await credentialsRepositories.getById(credentialId);

    if (!credential) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (credential.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    await credentialsRepositories.deleteById(credentialId);
}