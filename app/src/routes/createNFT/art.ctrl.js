"use strict";
const multer = require("multer");

const Art = require("../../models/Art");
const sys = require("../../config/db");

const output = {
    donateNFT: (req, res) => {
        // try {
        //     const result = await sys.db("getArtInfo");
        // console.table(result);

        //     res.render("createNFT/donateNFT", { data: result });
        // } catch (err) {
        //     res.status(500).send({
        //         error: err,
        //     });
        // }
        res.render("createNFT/donateNFT");
    },

    showArt: async (req, res) => {
        // console.log(req.body.param[0]);
        const art = new Art(req.body);
        const artList = await art.getArtList();
        console.log(artList);

        res.render("showArt");
    },
    registerArt: (req, res) => {
        res.render("registerArt");
    },
};

const process = {
    registerArt: async (req, res) => {
        req.body.art_image_path = req.file.path;
        const art = new Art(req.body);
        const response = await art.registerArt();

        const url = {
            method: "POST",
            path: "/registerArt",
        };

        return res.json(response);
    },
    getArtInfo: async (req, res) => {
        console.log("process.getArtInfo");
        try {
            const result = await sys.db("getArtInfo");
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
