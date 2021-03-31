"use strict";
const router = require("express").Router();
const Controller = require("../controllers/teknisi");

router.get("/", Controller.getAll);
router.get("/:id", Controller.getOne);
router.post("/", Controller.post);
router.put("/:id", Controller.put);
router.delete("/:id", Controller.destroy);

module.exports = router;
