"use strict";
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
        console.log(req.body);
        const account = new Account(req.body);
        const response = await account.login();
        return res.json(response);
    },

    signUp: async (req, res) => {
        const profile_image_path =
            req.file.fieldname + "/" + req.file.originalname;

        console.log(profile_image_path);
        req.body.profile_image_path = profile_image_path;

        const account = new Account(req.body);
        const response = await account.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
