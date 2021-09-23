"use strict";
const multer = require("multer");

const Account = require("../../models/Account");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    donateNFT: (req, res) => {
        res.render("createNFT/donateNFT");
    },
    artInfo: (req, res) => {
        res.render("createNFT/artInfo");
    },
    paymentGiver: (req, res) => {
        res.render("payment/paymentGiver");
    },
    signUp: (req, res) => {
        res.render("profile/signUp");
    },

    
    getProfile: async (req, res) => {
        res.render("profile/profile");
        const account = new Account(req.body);
        const response2 = await account.getProfileAll();
        console.log("response2", response2);       
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

        const response2 = await account.getProfile();
        console.log(response2);

        

        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
