'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        nome: 'Fulano',
        sobrenome: 'Santos',
        email: 'funalo@email.com'
      },
      {
        nome: 'Ciclano',
        sobrenome: 'Reis',
        email: 'ciclano@email.com'
      },
      {
        nome: 'Josué',
        sobrenome: 'Silva',
        email: 'josue@email.com'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
