"use strict";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let account;
let art_id;
// web3 version : 1.3.6
const web3 = new Web3(Web3.givenProvider || "http://localhost:5000");
console.log("insert web3", web3.version);

function getArtId() {
    var url_string = window.location.href.toLocaleLowerCase();
    var url = new URL(url_string);
    console.log(url);
    art_id = url.searchParams.get("art_id");
    console.log("get!", art_id);
}

function getArt() {
    getArtId();
    axios({
        method: "post",
        url: "/getArt",
        data: {
            // 2번이 NFT1.jpg
            param: [art_id],
        },
    })
        .catch((e) => {
            console.log(e);
        })
        .then(function (res) {
            let art = res.data[0];
            let imagePath = art.art_image_path;
            getImage(imagePath);
        });
}

function getImage(imagePath) {
    const cardImgDiv = document.getElementsByClassName("artInfo__cardImg")[0];

    let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;

    cardImgDiv.innerHTML = imageHTML;
}

// NFT 결제 페이지 이동
function artInfo__donateBtn() {
    connectWallet();

    console.log(account != undefined); // false!

    if (account != undefined) {
        window.alert(`Hi!, ${account}`);
        location.href = "paymentGiver";
    }
}

// 사용자 지갑에 연결합니다.
function connectWallet() {
    console.log("Use connectWallet function!");
    web3.eth.requestAccounts().then((accounts) => {
        console.log(accounts);

        account = accounts[0];
        console.log("Login Address is :", account);
    });
}
