import { prisma } from "../config/database.js"
import { INoteData } from "../types/noteTypes.js";

export async function insert(noteData: INoteData) {
    await prisma.notes.create({ data: noteData });
}

export async function getAllById(accountId: number) {
    const result = await prisma.notes.findMany({ where: { accountId: accountId } });
    return result
}

export async function getByTitleAndId(accountId: number, title: string) {
    const result = await prisma.notes.findFirst({ where: { title: title, accountId: accountId } });
    return result
}

export async function getById(noteId: number) {
    const result = await prisma.notes.findUnique({ where: { id: noteId } });
    return result
}

export async function deleteById(noteId: number) {
    await prisma.notes.delete({ where: { id: noteId } });
}