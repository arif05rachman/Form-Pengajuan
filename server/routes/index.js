"use strict";
const router = require("express").Router();
const userRoute = require("./user");
const roleRoute = require("./role");

router.use("/user", userRoute);
router.use("/role", roleRoute);

module.exports = router;
