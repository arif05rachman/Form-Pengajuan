'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pemeriksaans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PengajuanId: {
        type: Sequelize.INTEGER
      },
      tanggalPemeriksaan: {
        type: Sequelize.STRING
      },
      waktuPemeriksaan: {
        type: Sequelize.STRING
      },
      namaPemeriksa: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      disetujuiOleh: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pemeriksaans');
  }
};