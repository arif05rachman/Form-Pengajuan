"use strict";

const { Pengajuan } = require("../models");

class PengajuanController {
  static async getAll(req, res, next) {
    try {
      const allPengajuan = await Pengajuan.findAll();
      res.status(200).json(allPengajuan);
    } catch (err) {
      next(err);
    }
  }
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const onePengajuan = await Pengajuan.findOne({ where: { id } });
      if (!onePengajuan) {
        throw { status: 400, message: "data not exist" };
      }
      res.status(200).json(onePengajuan);
    } catch (err) {
      next(err);
    }
  }
  static async post(req, res, next) {
    try {
      const {
        UserId,
        tanggalPengajuan,
        namaBarang,
        alasanKerusakan,
        ruangLingkupKerja,
        diajukanOleh,
        diketahuiOleh,
        TeknisiId,
      } = req.body;
      const addPengajuan = await Pengajuan.create({
        UserId,
        tanggalPengajuan,
        namaBarang,
        alasanKerusakan,
        ruangLingkupKerja,
        diajukanOleh,
        diketahuiOleh,
        TeknisiId,
      });
      res.status(201).json(addPengajuan);
    } catch (err) {
      next(err);
    }
  }
  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const {
        UserId,
        tanggalPengajuan,
        namaBarang,
        alasanKerusakan,
        ruangLingkupKerja,
        diajukanOleh,
        diketahuiOleh,
        TeknisiId,
      } = req.body;
      const editPengajuan = await Pengajuan.update(
        {
          UserId,
          tanggalPengajuan,
          namaBarang,
          alasanKerusakan,
          ruangLingkupKerja,
          diajukanOleh,
          diketahuiOleh,
          TeknisiId,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      if (editPengajuan[0] === 1) {
        res.status(200).json(editPengajuan[1][0]);
      }
    } catch (err) {
      next(err);
    }
  }
  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const deletePengajuan = await Pengajuan.destroy({ where: { id } });
      res.status(200).json(deletePengajuan);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PengajuanController;
