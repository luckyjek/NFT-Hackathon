// All NFTs 페이지
"use strict";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let artList = [];

function getArtInfo() {
    axios({
        method: "post",
        url: "/getArtInfo",
    })
        .catch((e) => {
            console.log(e);
        })
        .then(function (res) {
            artList = res.data;
            console.table(artList);
        });
}

var nfts = document.getElementsByClassName("nft");

Array.from(nfts).forEach((nft) => {
    console.log(nft);
    nft.addEventListener("click", function (event) {
        console.log("click");
        // console.log(event);
        location.href = "artInfo";
    });
});

// let data = [
//     {
//         artist_id: "0",
//         artist_name: "eunkyung",
//         art_num: "10",
//         art_image: "./uploads/images/10",
//         art_info: "first eunkyung art",
//         art_update: "2021-09-14",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "1",
//         artist_name: "heekyung",
//         art_num: "11",
//         art_image: "./uploads/images/11",
//         art_info: "first heekyung art",
//         art_update: "2021-09-15",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "2",
//         artist_name: "jangyeon",
//         art_num: "12",
//         art_image: "./uploads/images/12",
//         art_info: "first jangyeon art",
//         art_update: "2021-09-16",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "3",
//         artist_name: "jeongseup",
//         art_num: "13",
//         art_image: "./uploads/images/13",
//         art_info: "first jeongseup art",
//         art_update: "2021-09-17",
//         art_price: "10eth",
//     },
// ];

// let list = "";
// for (let i = 0; i < data.length; i++) {
//     artistId = data[i].artist_id;
//     artistName = data[i].artist_name;
//     nftNum = data[i].art_num;
//     artImg = data[i].art_image;
//     artInfo = data[i].art_info;
//     artDate = data[i].art_update;
//     artPrice = data[i].art_price;

//     console.log("list");
// }

// const listNft = [];
// for (let list in data) {
//   list.push(data);
//   console.log(list);
// }

//   list+=
//   "<article>" + "<img src=" + artImg + "/>" + "<div>" + "<h3>" + artInfo + "</h3>" + "</article>";
// }

// const cards = document.querySelectorAll(".grid img");

// function NFTs() {}

// let list = "";
// for (let i = 0; i < nftInfo.length; i++) {

// }

// list+=
// ""
