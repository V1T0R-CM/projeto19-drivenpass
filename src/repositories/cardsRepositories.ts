import { prisma } from "../config/database.js"
import { ICardData } from "../types/cardTypes.js";

export async function insert(cardData: ICardData) {
    await prisma.cards.create({ data: cardData });
}

export async function getByCardNumber(cardNumber: string) {
    const result = await prisma.cards.findUnique({ where: { number: cardNumber } });
    return result
}

export async function getAllById(accountId: number) {
    const result = await prisma.cards.findMany({ where: { accountId: accountId } });
    return result
}

export async function getById(cardId: number) {
    const result = await prisma.cards.findUnique({ where: { id: cardId } });
    return result
}

export async function deleteById(cardId: number) {
    await prisma.cards.delete({ where: { id: cardId } });
}