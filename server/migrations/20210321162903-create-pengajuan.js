'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pengajuans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      tanggalPengajuan: {
        type: Sequelize.DATE
      },
      namaBarang: {
        type: Sequelize.STRING
      },
      alasanKerusakan: {
        type: Sequelize.STRING
      },
      ruangLingkupKerja: {
        type: Sequelize.STRING
      },
      diajukanOleh: {
        type: Sequelize.STRING
      },
      diketahuiOleh: {
        type: Sequelize.STRING
      },
      TeknisiId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Pengajuans');
  }
};