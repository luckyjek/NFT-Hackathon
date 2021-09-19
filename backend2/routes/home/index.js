// this's following ECMAScrit role
"use strict";

const express = require("express");
const router = express.Router();

router.get("/", hello);

router.get("/login", (req, res) => {
    res.render("home/login.ejs");
});

module.exports = router;
// export default router;
