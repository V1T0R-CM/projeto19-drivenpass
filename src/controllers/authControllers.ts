import { Request, Response } from 'express';
import { registerAccount, loginAccount } from "../services/authServices.js"

export async function signUp(req: Request, res: Response) {
    await registerAccount(req.body);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const token = await loginAccount(req.body)
    res.status(200).send(token)
}