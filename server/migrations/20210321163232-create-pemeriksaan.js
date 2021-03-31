'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pemeriksaans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PengajuanId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER,
      },
      tanggalPemeriksaan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.DATEONLY,
      },
      waktuPemeriksaan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      namaPemeriksa: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      keterangan: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      disetujuiOleh: {
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
    await queryInterface.dropTable('Pemeriksaans');
  }
};