'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('Dados', {

      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuarioId: {

        type: Sequelize.INTEGER,
        allowNull: false,
        references: {

          model: 'Usuarios',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      dados: {

        type: Sequelize.STRING,
      },
      createdAt: {

        type: Sequelize.DATE
      },
      updatedAt: {

        type: Sequelize.DATE
      },
      deletedAt: {

        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dados')
  }
};
