import { Request, Response } from 'express';
import * as wifisServices from "../services/wifisServices.js";

export async function postWifi(req: Request, res: Response) {
    const { account } = res.locals;
    await wifisServices.createWifi({ ...req.body, accountId: account.id });
    res.sendStatus(201);
}

export async function getAllWifis(req: Request, res: Response) {
    const { account } = res.locals;
    const result = await wifisServices.getAllWifisById(account.id);
    res.status(200).send(result);
}

export async function getWifi(req: Request, res: Response) {
    const { account } = res.locals;
    const wifiId = Number(req.params.id);
    const result = await wifisServices.getWifiById(wifiId, account.id);
    res.status(200).send(result);
}

export async function deleteWifi(req: Request, res: Response) {
    const { account } = res.locals;
    const wifiId = Number(req.params.id);
    const result = await wifisServices.deleteWifiById(wifiId, account.id);
    res.status(200).send(result);
}