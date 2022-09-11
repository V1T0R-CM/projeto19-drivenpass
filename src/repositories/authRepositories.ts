import { prisma } from "../config/database.js"

export async function getById(id: number) {
    const result = await prisma.account.findUnique({ where: { id: id } });
    return result
}

export async function getByEmail(email: string) {
    const result = await prisma.account.findUnique({ where: { email: email } });
    return result
}

export async function insert(email: string, password: string) {
    await prisma.account.create({ data: { email: email, password: password } })
}