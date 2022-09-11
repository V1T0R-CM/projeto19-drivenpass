import { Request, Response } from 'express';
import * as notesServices from "../services/notesServices.js";

export async function postNote(req: Request, res: Response) {
    const { account } = res.locals;
    await notesServices.createNote({ ...req.body, accountId: account.id });
    res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
    const { account } = res.locals;
    const result = await notesServices.getAllNotesById(account.id);
    res.status(200).send(result);
}

export async function getNote(req: Request, res: Response) {
    const { account } = res.locals;
    const noteId = Number(req.params.id);
    const result = await notesServices.getNoteById(noteId, account.id);
    res.status(200).send(result);
}

export async function deleteNote(req: Request, res: Response) {
    const { account } = res.locals;
    const noteId = Number(req.params.id);
    const result = await notesServices.deleteNoteById(noteId, account.id);
    res.status(200).send(result);
}