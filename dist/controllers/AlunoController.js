"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);

// quando eu uso attributes eu apontarei quais atributos é para pegar no db e mostrar

//usando order, eu posso ordenar a forma que os dados serão mostrados, no exemplo abaixo eu ordenei usando o id
//em ordem decrescente por isso desc, se fosse ascendente era asc

//include eu  uso para incluir nos dados exibidos os dados de outra tabela que tenha correspondencia por exemplo:
// vou mostrar o aluno de id 1, se ele tiver fotos ira aparecer o dado delas, usei o metodo attribute dentro para mostrar
//apenas os que eu quero
class AlunoController{
  async  index(req,res){
    const alunos= await _aluno2.default.findAll({
      attributes:['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
      order:[['id', 'DESC']],
      include:{
        model:_foto2.default,
        attributes:[
          'originalnome','filename','url',
        ],
        
      },

    });
      res.json(alunos);
  }

  async delete(req,res){
    try{
      const aluno= await  _aluno2.default.findByPk(req.params.id);

      if(!aluno){
        return res.status(400).json({
          errors:['Usuario não existe.'],
        })
      }

     const usuDelte= await aluno.destroy();
      return res.json(usuDelte);
      } catch(e) {
        return res.json(e);
      }
  }
  async update(req,res){
    try{
      const aluno = await _aluno2.default.findByPk(req.params.id);
      if(!aluno){
        return res.status(400).json({
          errors:['Usuario não existe. '],
        })
      }

       const novosDados= await aluno.update(req.body);
       return res.json(novosDados);
    }catch(e){
      return res.json(e);
    }
  }

  async store(req,res){
    try{
      const aluno= await _aluno2.default.create(req.body);
      return res.json(aluno);

    }catch(e){
      return res.json(e);
    }
  }
  async show(req,res){
    try{
      const aluno= await _aluno2.default.findByPk(req.params.id);
      res.json(aluno);

    }catch(e){
      return res.json(e);

    }
  }

};

exports. default = new AlunoController();