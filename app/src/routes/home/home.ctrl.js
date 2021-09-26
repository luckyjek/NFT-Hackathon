"use strict";
// const sys = require("../../config/db");
const Account = require("../../models/Account");

const output = {
    artInfo: (req, res) => {
        res.render("home/artInfo");
    },

    gallery: (req, res) => {
        res.render("home/gallery");
    },

    index: (req, res) => {
        res.render("home/index");
    },

    signUp: (req, res) => {
        res.render("home/signUp");
    },
};

const process = {
    login: async (req, res) => {
        const account = new Account(req.body);
        const response = await account.login();
        return res.json(response);
    },

    registerUser: (req, res) => {
        console.log(req);
        // const account = new Account(req.body);
        // const response = await account.register();
        // const response2 = await account.getProfile();
        // console.log(response2);
        // return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
