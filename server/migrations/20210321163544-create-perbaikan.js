"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Perbaikans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PemeriksaanId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER,
      },
      tanggalPerbaikan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.DATEONLY,
      },
      dikerjakanOleh: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      keteranganPerbaikan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.TEXT,
      },
      diketahuiOleh: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Perbaikans");
  },
};
