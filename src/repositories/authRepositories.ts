import { prisma } from "../config/database.js"

export async function getUserByEmail(email: string) {
    const result = await prisma.account.findUnique({ where: { email: email } });
    return result
}

export async function insertAccount(email: string, password: string) {
    await prisma.account.create({ data: { email: email, password: password } })
}