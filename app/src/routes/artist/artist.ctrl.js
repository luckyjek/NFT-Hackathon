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
    //     const response = await art.registerArt();
    //     const url = {
    //         method: "POST",
    //         path: "/registerArt",
    //     };
    //     return res.json(response);
    // },
    // router.post(
    //     "/register",
    //     [uploadProfile.single("profile_image")],
    //     home_ctrl.process.register
    // );
    // router.post("/showArt", art_ctrl.process.registerArt);
    // router.post(
    //     "/registerArt",
    //     [auth_ctrl.verifyToken, uploadArt.single("art_image")],
    //     art_ctrl.process.registerArt
    // );
};

module.exports = {
    output,
    process,
};
