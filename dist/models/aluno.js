"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Aluno extends _sequelize.Model{
  static init(sequelize){
    super.init({
      nome:{
        type:_sequelize.Sequelize.STRING,
        unique:true,
      },
      
      sobrenome:_sequelize.Sequelize.STRING,
      
      email:{
        type:_sequelize.Sequelize.STRING,
        unique:true,
      },
      
      idade:_sequelize.Sequelize.INTEGER,
      peso:_sequelize.Sequelize.FLOAT,
      altura:_sequelize.Sequelize.FLOAT,
    }, 
    
    {
        sequelize,
    })
    return this;
  }

  static associate(models){
    this.hasMany(models.foto, {foreignKey: 'aluno_id'})
  }
} exports.default = Aluno;