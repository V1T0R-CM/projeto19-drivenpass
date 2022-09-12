import * as cardsRepositories from "../repositories/cardsRepositories.js";
import { getById as getUserById } from "../repositories/authRepositories.js";
import { ICardData } from "../types/cardTypes.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const CRRYPTR_SECRET_KEY = process.env.CRRYPTR_SECRET_KEY;
const cryptr = new Cryptr(CRRYPTR_SECRET_KEY);

export async function createCard(cardData: ICardData) {
    const existingCard = await cardsRepositories.getByCardNumber(cardData.number);

    if (existingCard) throw { code: "Conflict", message: "Esse numero de cartão já foi cadastrado" }

    await cardsRepositories.insert({ ...cardData, password: cryptr.encrypt(cardData.password), securityCode: cryptr.encrypt(cardData.securityCode) });
}

export async function getAllCardsById(accountId: number) {
    const user = await getUserById(accountId);
    let result: ICardData[];

    if (!user) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma conta" };

    result = await cardsRepositories.getAllById(accountId);

    return result.map(card => {
        delete card["accountId"];

        return { ...card, password: cryptr.decrypt(card.password), securityCode: cryptr.decrypt(card.securityCode) }
    })
}

export async function getCardById(cardId: number, accountId: number) {
    const card = await cardsRepositories.getById(cardId);

    if (!card) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (card.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    delete card["accountId"];

    return { ...card, password: cryptr.decrypt(card.password), securityCode: cryptr.decrypt(card.securityCode) }
}

export async function deleteCardById(cardId: number, accountId: number) {
    const card = await cardsRepositories.getById(cardId);

    if (!card) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (card.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    await cardsRepositories.deleteById(cardId);
}