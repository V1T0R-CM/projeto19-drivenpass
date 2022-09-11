import * as notesRepositories from "../repositories/notesRepositories.js";
import { getById as getUserById } from "../repositories/authRepositories.js";
import { INoteData } from "../types/noteTypes.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const CRRYPTR_SECRET_KEY = process.env.CRRYPTR_SECRET_KEY;
const cryptr = new Cryptr(CRRYPTR_SECRET_KEY);

export async function createNote(noteData: INoteData) {
    const existingTitle = await notesRepositories.getByTitleAndId(noteData.accountId, noteData.title);

    if (existingTitle) throw { code: "Conflict", message: "Esse titulo já existe" };

    await notesRepositories.insert({ ...noteData, content: cryptr.encrypt(noteData.content) });
}

export async function getAllNotesById(accountId: number) {
    const user = await getUserById(accountId);
    let result: INoteData[];

    if (!user) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma conta" };

    result = await notesRepositories.getAllById(accountId);

    return result.map(note => {
        delete note["accountId"];

        return { ...note, content: cryptr.decrypt(note.content) }
    })
}

export async function getNoteById(noteId: number, accountId: number) {
    const note = await notesRepositories.getById(noteId);

    if (!note) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (note.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    delete note["accountId"];

    return { ...note, content: cryptr.decrypt(note.content) }
}

export async function deleteNoteById(noteId: number, accountId: number) {
    const note = await notesRepositories.getById(noteId);

    if (!note) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (note.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    await notesRepositories.deleteById(noteId);
}