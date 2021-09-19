// this's following ECMAScrit role
"use strict";
// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

// 앱세팅
// // 보여줄 페이지 목록을 경로를 잡아준다.
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json());
// body-parser setting : URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// router connect
// use : 미들웨어를 등록해주는 method
app.use("/", home);

module.exports = app;
