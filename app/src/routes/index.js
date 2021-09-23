"use stirct";

const express = require("express");
const router = express.Router();
const multer = require("multer");

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

const uploadArt = multer({
    destination: (req, file, cb) => {
        cb(null, "uploads/art"); //important this is a direct path fron our current file to storage location
      },
      filename: (req, file, cb) => {
        cb(null,file.originalname);
      },
    // dest: "uploads/art",
    //limits: { fileSize: 5 * 1024 * 1024 }
});

const home_ctrl = require("./home/home.ctrl");
// const art_ctrl = require("./createNFT/art.ctrl");
// const auth_ctrl = require("./profile/auth.ctrl");

// APIs
// HOME
router.get("/", home_ctrl.output.home);
router.get("/login", home_ctrl.output.login);
router.get("/register", home_ctrl.output.register);

router.post("/login", home_ctrl.process.login);
router.post(
    "/register",
    [uploadProfile.single("profile_image")],
    home_ctrl.process.register
);

// ART
router.get("/showArt", art_ctrl.output.showArt);
router.get("/registerArt", art_ctrl.output.registerArt);

router.post("/showArt", art_ctrl.process.registerArt);
router.post(
    "/registerArt",
    [auth_ctrl.verifyToken, uploadArt.single("art_image")],
    art_ctrl.process.registerArt
);

module.exports = router;
