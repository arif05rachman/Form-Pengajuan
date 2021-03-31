"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pengajuans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER,
      },
      tanggalPengajuan: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATEONLY,
      },
      namaBarang: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      alasanKerusakan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      ruangLingkupKerja: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      diajukanOleh: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      diketahuiOleh: {
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
    await queryInterface.dropTable("Pengajuans");
  },
};
