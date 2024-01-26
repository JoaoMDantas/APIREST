'use strict';
const bcryptjs= require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
        nome: 'John Doe',
        sobrenome:"doido",
        email: "jonzinho@gmail.com",
        password_hash:await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),


       },
       {
        nome: 'vinicin',
        sobrenome:"lucas",
        email: "jonzinho62@gmail.com",
        password_hash:await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
       },
       {
        nome: 'John marcao',
        sobrenome:"lodaooo",
        email: "jonzinho3@gmail.com",
        password_hash:await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),


       }
    ], {});
    
  },

  async down () {},
};
