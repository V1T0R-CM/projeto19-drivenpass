import { Request, Response } from 'express';
import * as cardsServices from "../services/cardsServices.js";

export async function postCard(req: Request, res: Response) {
    const { account } = res.locals;
    await cardsServices.createCard({ ...req.body, accountId: account.id });
    res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
    const { account } = res.locals;
    const result = await cardsServices.getAllCardsById(account.id);
    res.status(200).send(result);
}

export async function getCard(req: Request, res: Response) {
    const { account } = res.locals;
    const cardId = Number(req.params.id);
    const result = await cardsServices.getCardById(cardId, account.id);
    res.status(200).send(result);
}

export async function deleteCard(req: Request, res: Response) {
    const { account } = res.locals;
    const cardId = Number(req.params.id);
    const result = await cardsServices.deleteCardById(cardId, account.id);
    res.status(200).send(result);
}