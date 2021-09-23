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
        cb(null, file.originalname);
    },
    // dest: "uploads/art",
    //limits: { fileSize: 5 * 1024 * 1024 }
});

const artist_ctrl = require("./artist/artist.ctrl");
const giver_ctrl = require("./giver/giver.ctrl");
const home_ctrl = require("./home/home.ctrl");
const payment_ctrl = require("./payment/payment.ctrl");
const profile_ctrl = require("./profile/profile.ctrl");

// Page Renders - artist folder
router.get("/donateNFT", art_ctrl.output.donateNFT);
router.get("/artInfo", home_ctrl.output.artInfo);
router.get("/paymentGiver", home_ctrl.output.paymentGiver);
router.get("/signUp", home_ctrl.output.signUp);

// Page Renders - giver folder
router.get("/profile", home_ctrl.output.getProfile);
router.post("/getArtInfo", art_ctrl.process.getArtInfo);

// Page Renders - home folder
router.get("/", home_ctrl.output.index);
router.get("/artInfo", home_ctrl.output.artInfo);
router.get("/gallery", home_ctrl.output.gallery);
router.get("/signUp", home_ctrl.output.signUp);

// Page Renders - payment folder
router.get("/", home_ctrl.output.index);

// Page Renders - profile folder
router.get("/", home_ctrl.output.index);

// APIs
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
