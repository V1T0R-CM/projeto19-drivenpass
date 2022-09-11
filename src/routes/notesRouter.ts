import { Router } from 'express';
import { postNote, getAllNotes, getNote, deleteNote } from '../controllers/notesControllers.js';
import { postNoteValidation } from '../middlewares/notesMiddlewares.js';
import { tokenMiddlewareValidation, paramsMiddlewareValidation } from '../middlewares/genericMiddlewares.js';

const notesRouter = Router();

notesRouter.post("/notes", postNoteValidation, postNote);
notesRouter.get("/notes", tokenMiddlewareValidation, getAllNotes)
notesRouter.get("/notes/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, getNote)
notesRouter.delete("/notes/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, deleteNote)

export default notesRouter;