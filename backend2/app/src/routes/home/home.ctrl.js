// this's following ECMAScrit role
"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index.ejs");
    },
    login: (req, res) => {
        res.render("home/login.ejs");
    },
};

const users = {
    id: ["abc1", "abc2", "abc3"],
    pw: ["123", "123", "123"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "login failure",
        });
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
