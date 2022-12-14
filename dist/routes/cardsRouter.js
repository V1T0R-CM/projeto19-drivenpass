import { Router } from 'express';
import { postCard, getAllCards, getCard, deleteCard } from '../controllers/cardsControllers.js';
import { postCardValidation } from '../middlewares/cardsMiddlewares.js';
import { tokenMiddlewareValidation, paramsMiddlewareValidation } from '../middlewares/genericMiddlewares.js';
var cardsRouter = Router();
cardsRouter.post("/cards", postCardValidation, postCard);
cardsRouter.get("/cards", tokenMiddlewareValidation, getAllCards);
cardsRouter.get("/cards/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, getCard);
cardsRouter["delete"]("/cards/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, deleteCard);
export default cardsRouter;
