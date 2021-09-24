"use strict";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

function getArt() {
    axios({
        method: "post",
        url: "/getArt",
        data: {
            // 2번이 NFT1.jpg
            param: [4],
        },
    })
        .catch((e) => {
            console.log("catch");
            console.log(e);
        })
        .then(function (res) {
            console.log(res);
            let art = res.data[0];
            let imagePath = art.art_image_path;
            console.log(imagePath);
            getImage(imagePath);
        });
}

function getImage(imagePath) {
    const cardImgDiv = document.getElementsByClassName("artInfo__cardImg")[0];

    let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;

    cardImgDiv.innerHTML = imageHTML;
}
