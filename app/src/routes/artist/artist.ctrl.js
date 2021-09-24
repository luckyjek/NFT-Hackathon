"use strict";
// const multer = require("multer");
const sys = require("../../config/db");

const output = {
    craeteNft: (req, res) => {
        res.render("artist/craeteNft");
    },

    deployedNft: (req, res) => {
        res.render("artist/deployedNft");
    },
};

const process = {
    // registerArt: async (req, res) => {
    //     req.body.art_image_path = req.file.path;
    //     const art = new Art(req.body);
    //     const response = await art.isterArt();
    //     const url = {
    //         method: "POST",
    //         path: "/registerArt",
    //     };
    //     return res.json(response);
    // },
    // getArtInfo: async (req, res) => {
    //     console.log("process.getArtInfo");
    //     try {
    //         const result = await sys.db("getArtInfo");
    //         console.table(result);
    //     } catch (err) {
    //         res.status(500).send({
    //             error: err,
    //         });
    //     }
    // },
};

module.exports = {
    output,
    process,
};
