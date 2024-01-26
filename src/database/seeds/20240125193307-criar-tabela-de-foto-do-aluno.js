'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('fotos', {
         id:{
         type: Sequelize.INTEGER,
         allowNull:false,
         autoIncrement:true,
         primaryKey:true,
         },
         originalnome: {
          type: Sequelize.STRING,
          allowNull:true,
         },
         filename: {
          type: Sequelize.STRING,
          allowNull:false,
         },
         aluno_id:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'alunos',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
          //cascade no onDeletefará com que se o aluno for apagado, as fotos dele támbem sejam apagagas
          //cascade no update fara com que se o id do aluno for mudado, o id das imagem acompanhem o aluno
          //cascade como o proprio nome diz, faz uma cascata nos eventos
          //posso colocar set null para que se o aluno for apagado fique setado o valor null para o campo aluno id
         },

         created_at:{
          type:Sequelize.DATE,
          allowNull:false,
         },
         updated_at:{
          type:Sequelize.DATE,
          allowNull:false,
         },

        })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('fotos');
  }
};

