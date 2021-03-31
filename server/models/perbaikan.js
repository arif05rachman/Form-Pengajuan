'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perbaikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Perbaikan.init(
    {
      PemeriksaanId: DataTypes.INTEGER,
      tanggalPerbaikan: DataTypes.DATEONLY,
      dikerjakanOleh: DataTypes.STRING,
      keteranganPerbaikan: DataTypes.TEXT,
      diketahuiOleh: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Perbaikan",
    }
  );
  return Perbaikan;
};