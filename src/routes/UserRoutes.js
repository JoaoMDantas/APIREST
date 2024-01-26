import { Router } from "express";
import UserController from "../controllers/UserController";
import { useInflection } from "sequelize";
import middleware from "../middlewares/loguinRequired";
import loguinRequired from "../middlewares/loguinRequired";
const router= new Router();



router.get("/",middleware, UserController.index); //lista todos os usuários
router.get('/:id', UserController.show);//lista usuário 

//router.post("/", UserController.store);//cria usuário
router.put('/', loguinRequired, UserController.update);
router.delete('/', loguinRequired, UserController.delete);

export default router;


/*
index=> lista usuarios ->GET
store/create=> cria um novo usuario->POST
delete=> apaga um usuario-> DELETE
show=> mostra um usuario-> GET
update=>atualiza um usuário->PATCH OU PUT
*/