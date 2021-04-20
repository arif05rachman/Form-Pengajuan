"use strict";
const { encrypt } = require("../helpers/bcriptPassword");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role);
    }
  }
  User.init(
    {
      RoleId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      nip: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      jabatan: DataTypes.STRING,
      TeknisiId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(user, options) {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
