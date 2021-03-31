"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RoleId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      nip: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      username: {
        unique: true,
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        isEmail: true,
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      jabatan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      TeknisiId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
