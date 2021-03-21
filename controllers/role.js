"use strict";

const { Role } = require("../models");

class RoleController {
  static async getAll(req, res, next) {
    try {
      const allRole = await Role.findAll();
      res.status(200).json(allRole);
    } catch (err) {
      next(err);
    }
  }
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const oneRole = await Role.findOne({ where: { id } });
      res.status(200).json(oneRole);
    } catch (err) {
      next(err);
    }
  }
  static async post(req, res, next) {
    try {
      const { name } = req.body;
      const addRole = await Role.create({
        name,
      });
      res.status(201).json(addRole);
    } catch (err) {
      next(err);
    }
  }
  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const editRole = await Role.update(
        {
          name,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      if (editRole[0] === 1) {
        res.status(200).json(editRole[1][0]);
      }
    } catch (err) {
      next(err);
    }
  }
  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const deleteRole = await Role.destroy({ where: { id } });
      res.status(200).json(deleteRole);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RoleController;
