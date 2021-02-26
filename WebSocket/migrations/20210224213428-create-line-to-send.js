"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LineToSends", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      u: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      p: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      action: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      sid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      eid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      leg: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      pid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      alt: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      lid: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      vml: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      hml: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      ttl: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      tov: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      tun: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      vsd: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      vso: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      hsd: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      hso: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      draw: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LineToSends");
  },
};
