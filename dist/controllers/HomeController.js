"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);


class HomeController{

 /*async index(req,res){
   res.json('hello world');
  }*/
async  index(req,res){
  const novoaluno= await _aluno2.default.create({
    nome: 'Luiz',
    sobrenome:'pedro',
    email:'joaomaqrcos@hotmail.com',
    idade:35,
    peso:135,
    altura:2.5,
  });
    res.json(novoaluno);
  }
  //cria uma mariadb com esses dados
};

exports. default = new HomeController();