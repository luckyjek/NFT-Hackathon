// this's following ECMAScrit role
"use strict";
const express = require("express");
const home = require("./src/routes/home");
const app = express();

// // 보여줄 페이지 목록을 경로를 잡아준다.
app.set("views", "./src/views");
app.set("view engine", "ejs");

// router connect
// use : 미들웨어를 등록해주는 method
app.use("/", home);
app.use(express.static(`${__dirname}/src/public/`));

module.exports = app;
