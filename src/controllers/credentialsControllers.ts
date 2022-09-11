import { Request, Response } from 'express';
import * as credentialsServices from "../services/credentialsServices.js";

export async function postCredential(req: Request, res: Response) {
    const { account } = res.locals;
    await credentialsServices.createCredential({ ...req.body, accountId: account.id });
    res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
    const { account } = res.locals;
    const result = await credentialsServices.getAllCredentialsById(account.id);
    res.status(200).send(result);
}

export async function getCredential(req: Request, res: Response) {
    const { account } = res.locals;
    const credentialId = Number(req.params.id);
    const result = await credentialsServices.getCredentialById(credentialId, account.id);
    res.status(200).send(result);
}

export async function deleteCredential(req: Request, res: Response) {
    const { account } = res.locals;
    const credentialId = Number(req.params.id);
    const result = await credentialsServices.deleteCredentialById(credentialId, account.id);
    res.status(200).send(result);
}