// this's following ECMAScrit role
"use strict";
const express = require("express");
const home = require("./routes/home");
const app = express();

// // 보여줄 페이지 목록을 경로를 잡아준다.
app.set("views", "./views");
app.set("view engine", "ejs");

// router connect
// use : 미들웨어를 등록해주는 method
app.use("/", home);

module.exports = app;
