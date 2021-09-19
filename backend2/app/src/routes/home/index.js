// this's following ECMAScrit role
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/gallery", ctrl.output.gallery);
router.get("/test", ctrl.output.test);
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
// export default router;
