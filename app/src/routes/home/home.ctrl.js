"use strict";
const multer = require("multer");
// const sys = require("../../config/db");
const Account = require("../../models/Account");

const uploadProfile = multer({
    destination: (req, file, cb) => {
        cb(null, "uploads/profile"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    // dest: "uploads/profile",
    //limits: { fileSize: 5 * 256 * 256 }
});

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

    registerUser: async (req, res) => {
        req.body.profile_image_path = req.file.path;
        const account = new Account(req.body);
        const response = await account.register();
        const response2 = await account.getProfile();
        console.log(response2);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
