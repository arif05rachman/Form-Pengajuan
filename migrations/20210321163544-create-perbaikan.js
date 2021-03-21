'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Perbaikans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PemeriksaanId: {
        type: Sequelize.INTEGER
      },
      tanggalPerbaikan: {
        type: Sequelize.STRING
      },
      dikerjakanOleh: {
        type: Sequelize.STRING
      },
      keteranganPerbaikan: {
        type: Sequelize.TEXT
      },
      diketahuiOleh: {
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
    await queryInterface.dropTable('Perbaikans');
  }
};