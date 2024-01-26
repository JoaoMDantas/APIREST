"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _fotoController = require('../controllers/fotoController'); var _fotoController2 = _interopRequireDefault(_fotoController);
var _loguinRequired = require('../middlewares/loguinRequired'); var _loguinRequired2 = _interopRequireDefault(_loguinRequired);


const router= new (0, _express.Router)();


router.post("/",_loguinRequired2.default,_fotoController2.default.store);

exports. default = router;