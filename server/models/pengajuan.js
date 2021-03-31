'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengajuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pengajuan.init(
    {
      UserId: DataTypes.INTEGER,
      tanggalPengajuan: DataTypes.DATEONLY,
      namaBarang: DataTypes.STRING,
      alasanKerusakan: DataTypes.STRING,
      ruangLingkupKerja: DataTypes.STRING,
      diajukanOleh: DataTypes.STRING,
      diketahuiOleh: DataTypes.STRING,
      TeknisiId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pengajuan",
    }
  );
  return Pengajuan;
};