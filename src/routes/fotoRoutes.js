import { Router } from "express";

import fotoController from "../controllers/fotoController";
import loginRequired from "../middlewares/loguinRequired";


const router= new Router();


router.post("/",loginRequired,fotoController.store);

export default router;