"use strict";
// const multer = require("multer");
// const Account = require("../../models/Account");
const sys = require("../../config/db");

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
    // login: async (req, res) => {
    //     const account = new Account(req.body);
    //     const response = await account.login();
    //     return res.json(response);
    // },
    // register: async (req, res) => {
    //     req.body.profile_image_path = req.file.path;
    //     const account = new Account(req.body);
    //     const response = await account.register();
    //     const response2 = await account.getProfile();
    //     console.log(response2);
    //     return res.json(response);
    // },
    // register: async (req, res) => {
    //      static async register(account) {
    //         db.query(
    //             query,
    //             [
    //                 account.account_id,
    //                 account.wallet_address,
    //                 account.profile_image_path,
    //                 account.email,
    //             ],
    //             (err) => {
    //                 if (err) reject(`${err}`);
    //                 else resolve({ success: true });
    //             }
    //         );
    // }
    // }
};

module.exports = {
    output,
    process,
};
