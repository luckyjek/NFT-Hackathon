"use strict";
const sys = require("../../config/db");

const output = {
    paymentArtist: (req, res) => {
        res.render("payment/paymentArtist");
    },

    paymentGiver: (req, res) => {
        res.render("payment/paymentGiver");
    },

    paymentPlatform: (req, res) => {
        res.render("payment/paymentPlatform");
    },
};

const process = {};

module.exports = {
    output,
    process,
};
