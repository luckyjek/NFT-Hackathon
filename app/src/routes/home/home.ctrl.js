"use strict";
const multer = require("multer");

const Account = require("../../models/Account");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: async (req, res) => {
        const account = new Account(req.body);
        const response = await account.login();

        return res.json(response);
    },

    register: async (req, res) => {
        req.body.profile_image_path = req.file.path;

        const account = new Account(req.body);
        const response = await account.register();

        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
