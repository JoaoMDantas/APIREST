import { Router } from "express";
import alunoController from "../controllers/AlunoController";
const router= new Router();

router.get("/", alunoController.index );
router.get("/:id", alunoController.show);
router.delete('/:id', alunoController.delete);
router.put('/:id', alunoController.update);
router.post('/',alunoController.store);


export default router;