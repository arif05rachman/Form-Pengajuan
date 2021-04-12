"use strict";
const router = require("express").Router();
const userRoute = require("./user");
const roleRoute = require("./role");
const authRoute = require("./auth");

router.use("/user", userRoute);
router.use("/role", roleRoute);
router.use("/auth", authRoute);

module.exports = router;
