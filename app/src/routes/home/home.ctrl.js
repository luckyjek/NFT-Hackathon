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
        const account = new Account(req.body);
        const response = await account.login();
        return res.json(response);
    },

    signUp: async (req, res) => {
        file.originalname
        req.body.profile_image_path = req.file.path;
        // console.log("req.file!!!!!", req.file);
        const account = new Account(req.body);
        const response = await account.register();
        const response2 = await account.getProfile();
        console.log(response2);
        console.log(response);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
