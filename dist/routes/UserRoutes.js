"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _sequelize = require('sequelize');
var _loguinRequired = require('../middlewares/loguinRequired'); var _loguinRequired2 = _interopRequireDefault(_loguinRequired);

const router= new (0, _express.Router)();



router.get("/",_loguinRequired2.default, _UserController2.default.index); //lista todos os usuários
router.get('/:id', _UserController2.default.show);//lista usuário 

//router.post("/", UserController.store);//cria usuário
router.put('/', _loguinRequired2.default, _UserController2.default.update);
router.delete('/', _loguinRequired2.default, _UserController2.default.delete);

exports. default = router;


/*
index=> lista usuarios ->GET
store/create=> cria um novo usuario->POST
delete=> apaga um usuario-> DELETE
show=> mostra um usuario-> GET
update=>atualiza um usuário->PATCH OU PUT
*/