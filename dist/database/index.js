"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);


const models =[_aluno2.default,_User2.default, _foto2.default];

const connection= new (0, _sequelize.Sequelize)(_database2.default);


models.forEach((model)=>model.init(connection));

models.forEach((model)=>{if(model.associate){  model.associate(connection.models)}});

