// this's following ECMAScrit role
"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    home: (req, res) => {
        res.render("home/index.ejs");
    },
    login: (req, res) => {
        res.render("home/login.ejs");
    },
    test: (req, res) => {
        res.render("home/test.ejs");
    },
    gallery: (req, res) => {
        res.render("home/gallery.ejs");
    },
};

// const users = {
//     id: ["abc1", "abc2", "abc3"],
//     pw: ["123", "123", "123"],
// };

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        const users = UserStorage.getUsers("id", "pw");
        console.log(users);

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "login failure";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

// 자바스크립트에서 { key } === { key : key }
/*
위에서 exports 하는 모듈의 정확한 데이터는 아래와 같다.

{
    hello : hello
    login : login
};
*/
