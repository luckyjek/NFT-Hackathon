// this's following ECMAScrit role
"use strict";

const home = (req, res) => {
    res.render("home/index.ejs");
};

const login = (req, res) => {
    res.render("home/login.ejs");
};

module.exports = {
    home,
    login,
};

// 자바스크립트에서 { key } === { key : key }
/*
위에서 exports 하는 모듈의 정확한 데이터는 아래와 같다.

{
    hello : hello
    login : login
};
*/
