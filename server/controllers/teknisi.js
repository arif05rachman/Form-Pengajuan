"use strict";

const { Teknisi } = require("../models");

class TeknisiController {
  static async getAll(req, res, next) {
    try {
      const allTeknisi = await Teknisi.findAll();
      res.status(200).json(allTeknisi);
    } catch (err) {
      next(err);
    }
  }
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const oneTeknisi = await Teknisi.findOne({ where: { id } });
      if (!oneTeknisi) {
        throw { status: 400, message: "data not exist" };
      }
      res.status(200).json(oneTeknisi);
    } catch (err) {
      next(err);
    }
  }
  static async post(req, res, next) {
    try {
      const { name } = req.body;
      const addTeknisi = await Teknisi.create({
        name,
      });
      res.status(201).json(addTeknisi);
    } catch (err) {
      next(err);
    }
  }
  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const editTeknisi = await Teknisi.update(
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
      if (editTeknisi[0] === 1) {
        res.status(200).json(editTeknisi[1][0]);
      }
    } catch (err) {
      next(err);
    }
  }
  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const deleteTeknisi = await Teknisi.destroy({ where: { id } });
      res.status(200).json(deleteTeknisi);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TeknisiController;
