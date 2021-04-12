"use strict";
const router = require("express").Router();
const Controller = require("../controllers/auth");

router.post("/login", Controller.login);

module.exports = router;
