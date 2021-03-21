'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pemeriksaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pemeriksaan.init({
    PengajuanId: DataTypes.INTEGER,
    tanggalPemeriksaan: DataTypes.STRING,
    waktuPemeriksaan: DataTypes.STRING,
    namaPemeriksa: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    disetujuiOleh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pemeriksaan',
  });
  return Pemeriksaan;
};