"use strict";

const { User } = require("../models");
const { compare } = require("../helpers/bcriptPassword");
const { generateToken } = require("../helpers/jwtToken");
class AuthController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { status: 400, message: "username/password must fillin" };
      }
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (user) {
        if (compare(password, user.password)) {
          const { id, username, jabatan } = user;
          const token = generateToken({ id, username, jabatan });
          res.status(200).json({ access_token: token });
        } else {
          throw { status: 400, message: "combination username/password wrong" };
        }
      } else {
        throw { status: 400, message: "username not exist" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthController;
