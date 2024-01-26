import Aluno from "../models/aluno";


class HomeController{

 /*async index(req,res){
   res.json('hello world');
  }*/
async  index(req,res){
  const novoaluno= await Aluno.create({
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

export default new HomeController();