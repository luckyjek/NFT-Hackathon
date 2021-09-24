"use strict";
const sys = require("../../config/db");

const output = {
    paymentArtist: (req, res) => {
        res.render("home/artInfo");
    },

    paymentGiver: (req, res) => {
        res.render("home/gallery");
    },

    paymentPlatform: (req, res) => {
        res.render("home/index");
    },
};

const process = {};

module.exports = {
    output,
    process,
};
