"use stirct";

const express = require("express");
const router = express.Router();
// const multer = require("multer");

// const uploadArt = multer({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/art"); //important this is a direct path fron our current file to storage location
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
//     // dest: "uploads/art",
//     //limits: { fileSize: 5 * 1024 * 1024 }
// });

const artist_ctrl = require("./artist/artist.ctrl");
const giver_ctrl = require("./giver/giver.ctrl");
const home_ctrl = require("./home/home.ctrl");
const payment_ctrl = require("./payment/payment.ctrl");
const profile_ctrl = require("./profile/profile.ctrl");

/**
 * @title 페이지 라우터
 * @description 각 URL에 따라 요청한 페이지를 연결해줍니다.
 *
 * @example
 * => 만약 요청된 페이지가 "localhost:5000/createNft"과 같다면,
 * => 해당 요청은 views 폴더 내에 위치한 createNft.ejs 요청한 것을 뜻합니다.
 * => 따라서, 서버는 해당 페이지 요청을 컨트롤러(artist_ctrl)에서 전달하여,
 * => 컨트롤러는 해당 페이지를 클라이언트에게 output(송출) 합니다.
 */
// Page Renders - artist folder
router.get("/craeteNft", artist_ctrl.output.craeteNft);
router.get("/deployedNft", artist_ctrl.output.deployedNft);

// Page Renders - giver folder
router.get("/donateNft", giver_ctrl.output.donateNft);
router.get("/ownedNft", giver_ctrl.output.ownedNft);

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
/**
 * @title APIs
 * @description 데이터베이스 및 서버 스토리지에 데이터를 저장하거나 요청합니다.
 *
 * @example1 /getArtList :
 * @example2 /registerArt : *
 * @example3 /images/:alias :
 */
// router.post("/registerArt", artist_ctrl.process.registerArt);
router.post("/getArtList", giver_ctrl.process.getArtList);
router.post("/getArt", giver_ctrl.process.getArt);
router.post("/getSpecifiedArtList", giver_ctrl.process.getSpecifiedArtList);
// router.post("/getAccount", home_ctrl.process.getAccount);

// router.post("/registUser", home_ctrl.process.registerUser);
// router.post("/getUserList", giver_ctrl.process.getUserList);
// router.post("/getUser", giver_ctrl.process.getUser);

router.get("/images/:type/:path", giver_ctrl.process.getImage);

// router.post("/login", home_ctrl.process.login);

module.exports = router;
