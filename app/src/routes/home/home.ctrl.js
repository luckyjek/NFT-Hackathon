"use strict";
const Account = require("../../models/Account");
const { sys } = require("../../config/db");
const output = {
    artInfo: (req, res) => {
        res.render("home/artInfo");
    },

    gallery: (req, res) => {
        res.render("home/gallery");
    },

    index: (req, res) => {
        console.log("resresres", req);
        res.render("home/index");
    },
    index2: (req, res) => {
        console.log("req", req);
        // console.log("reqheader", req.header());
        console.log("req.head", req.head);
        console.log("req.body", req.body);

        res.render("home/index2");
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

        console.log(response);
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

    confirm: async (req, res) => {
        console.log(req.body);
        try {
            const result = await sys.db("confirm", req.body.param[0]);
            console.table(result);
            res.send(result);
        } catch (err) {
            res.status(500).send({
                error: err,
            });
        }
    },
};

module.exports = {
    output,
    process,
};
