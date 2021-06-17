import { Router } from "express";
import * as devicesController from "../controllers/devicesController";
const devicesRouter = Router();
devicesRouter.get("/", devicesController.getWelcome);
devicesRouter.get("/update", devicesController.update);
export default devicesRouter;
