"use strict";
// const multer = require("multer");
const sys = require("../../config/db");

const output = {
    donateNft: (req, res) => {
        res.render("giver/donateNft");
    },

    ownedNft: (req, res) => {
        res.render("giver/ownedNft");
    },
};

const process = {
    getArtList: async (req, res) => {
        console.log("process.getArtInfo");
        try {
            const result = await sys.db("getArtList");
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
