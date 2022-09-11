import { Router } from 'express';
import { postWifi, getAllWifis, getWifi, deleteWifi } from '../controllers/wifisControllers.js';
import { postWifiValidation } from '../middlewares/wifisMiddlewares.js';
import { tokenMiddlewareValidation, paramsMiddlewareValidation } from '../middlewares/genericMiddlewares.js';

const wifisRouter = Router();

wifisRouter.post("/wifis", postWifiValidation, postWifi);
wifisRouter.get("/wifis", tokenMiddlewareValidation, getAllWifis)
wifisRouter.get("/wifis/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, getWifi)
wifisRouter.delete("/wifis/:id", paramsMiddlewareValidation, tokenMiddlewareValidation, deleteWifi)

export default wifisRouter;