import { Sequelize, Model } from "sequelize";

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome:{
        type:Sequelize.STRING,
        unique:true,
      },
      
      sobrenome:Sequelize.STRING,
      
      email:{
        type:Sequelize.STRING,
        unique:true,
      },
      
      idade:Sequelize.INTEGER,
      peso:Sequelize.FLOAT,
      altura:Sequelize.FLOAT,
    }, 
    
    {
        sequelize,
    })
    return this;
  }

  static associate(models){
    this.hasMany(models.foto, {foreignKey: 'aluno_id'})
  }
}