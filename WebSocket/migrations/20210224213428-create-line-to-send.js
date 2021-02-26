'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LineToSends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u: {
        type: Sequelize.TEXT
      },
      p: {
        type: Sequelize.TEXT
      },
      action: {
        type: Sequelize.TEXT
      },
      sid: {
        type: Sequelize.INTEGER
      },
      eid: {
        type: Sequelize.INTEGER
      },
      leg: {
        type: Sequelize.INTEGER
      },
      pid: {
        type: Sequelize.INTEGER
      },
      alt: {
        type: Sequelize.TEXT
      },
      lid: {
        type: Sequelize.TEXT
      },
      vml: {
        type: Sequelize.TEXT
      },
      hml: {
        type: Sequelize.TEXT
      },
      ttl: {
        type: Sequelize.TEXT
      },
      tov: {
        type: Sequelize.TEXT
      },
      tun: {
        type: Sequelize.TEXT
      },
      vsd: {
        type: Sequelize.TEXT
      },
      vso: {
        type: Sequelize.TEXT
      },
      hsd: {
        type: Sequelize.TEXT
      },
      hso: {
        type: Sequelize.TEXT
      },
      draw: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LineToSends');
  }
};