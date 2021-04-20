"use strict";

const { User, Role } = require("../models");

class UserController {
  static async getAll(req, res, next) {
    try {
      const allUser = await User.findAll({
        include: {model:Role}
      });
      res.status(200).json(allUser);
    } catch (err) {
      next(err);
    }
  }
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const oneUser = await User.findOne({ where: { id } });
      if (!oneUser) {
        throw { status: 400, message: "data not exist" };
      }
      res.status(200).json(oneUser);
    } catch (err) {
      next(err);
    }
  }
  static async post(req, res, next) {
    try {
      const {
        roleId,
        name,
        nip,
        username,
        email,
        password,
        jabatan,
        teknisiId,
      } = req.body;
      const addUser = await User.create({
        RoleId: roleId,
        name,
        nip,
        username,
        email,
        password,
        jabatan,
        TeknisiId: teknisiId,
      });
      res.status(201).json(addUser);
    } catch (err) {
      next(err);
    }
  }
  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const {
        roleId,
        name,
        nip,
        username,
        email,
        password,
        jabatan,
        teknisiId,
      } = req.body;
      const editUser = await User.update(
        {
          RoleId: roleId,
          name,
          nip,
          username,
          email,
          password,
          jabatan,
          TeknisiId: teknisiId,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      if (editUser[0] === 1) {
        res.status(200).json(editUser[1][0]);
      }
    } catch (err) {
      next(err);
    }
  }
  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const deleteUser = await User.destroy({ where: { id } });
      res.status(200).json(deleteUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
