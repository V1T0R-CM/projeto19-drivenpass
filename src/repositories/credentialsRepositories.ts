import { prisma } from "../config/database.js"
import { ICredentialData } from "../types/credentialTypes.js";

export async function insert(credentialData: ICredentialData) {
    await prisma.credentials.create({ data: credentialData });
}

export async function getAllById(accountId: number) {
    const result = await prisma.credentials.findMany({ where: { accountId: accountId } });
    return result
}

export async function getByTitleAndId(accountId: number, credentialTitle: string) {
    const result = await prisma.credentials.findFirst({ where: { credentialTitle: credentialTitle, accountId: accountId } });
    return result
}

export async function getById(credentialId: number) {
    const result = await prisma.credentials.findUnique({ where: { id: credentialId } });
    return result
}

export async function deleteById(credentialId: number) {
    await prisma.credentials.delete({ where: { id: credentialId } });
}