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
router.get("/craeteNft", artist_ctrl.output.craeteNft);
router.get("/deployedNft", artist_ctrl.output.deployedNft);

// Page Renders - giver folder
router.get("/donateNft", giver_ctrl.output.donateNft);
router.post("/ownedNft", giver_ctrl.output.ownedNft);

// Page Renders - home folder
router.get("/artInfo", home_ctrl.output.artInfo);
router.get("/gallery", home_ctrl.output.gallery);
router.get("/", home_ctrl.output.index);
router.get("/signUp", home_ctrl.output.signUp);

// Page Renders - payment folder
router.get("/paymentArtist", payment_ctrl.output.paymentArtist);
router.get("/paymentGiver", payment_ctrl.output.paymentGiver);
router.get("/paymentPlatform", payment_ctrl.output.paymentPlatform);

// Page Renders - profile folder
router.get("/editProfile", profile_ctrl.output.editProfile);
router.get("/myAccountArtist", profile_ctrl.output.myAccountArtist);
router.get("/myAccountGiver", profile_ctrl.output.myAccountGiver);
router.get("/profile", profile_ctrl.output.profile);

router.post("/getArtList", giver_ctrl.process.getArtList);

router.get("/images/:type/:path", giver_ctrl.process.getImage);

// APIs
router.post("/getArtList", giver_ctrl.process.getArtList);
router.post("/getArt", giver_ctrl.process.getArt);

// APIs
router.get("/images/:type/:path", giver_ctrl.process.getImage);

// router.get("/register", home_ctrl.output.register);
// router.post("/login", home_ctrl.process.login);
// router.post(
//     "/register",
//     [uploadProfile.single("profile_image")],
//     home_ctrl.process.register
// );

// ART
// router.get("/showArt", art_ctrl.output.showArt);
// router.get("/registerArt", art_ctrl.output.registerArt);

// router.post("/showArt", art_ctrl.process.registerArt);
// router.post(
//     "/registerArt",
//     [auth_ctrl.verifyToken, uploadArt.single("art_image")],
//     art_ctrl.process.registerArt
// );

module.exports = router;
