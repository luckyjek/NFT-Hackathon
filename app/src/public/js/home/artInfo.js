"use strict";
console.log("use script");

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let art = [];

function getArt() {
    console.log("getArt");
    axios({
        method: "post",
        url: "/getArt",
        data: {
            param: [1],
        },
    })
        .catch((e) => {
            console.log("catch");
            console.log(e);
        })
        .then(function (res) {
            art = res.data;
            console.log(art);
        });
}

// var data = [
//   {
//     artist_id: "0",
//     artist_name: "eunkyung",
//     artist_image: "./img/artist.jpg",
//     art_num: "10",
//     art_image: "./img/NFT13.jpg",
//     art_name: "smile",
//     art_info: "first eunkyung art",
//     art_update: "2021-09-14",
//     art_price: "10eth",
//   },
//   {
//     artist_id: "1",
//     artist_name: "heekyung",
//     artist_image: "./img/artist.jpg",
//     art_num: "11",
//     art_image: "./img/NFT1.jpg",
//     art_name: "happy",
//     art_info: "first heekyung art",
//     art_update: "2021-09-15",
//     art_price: "10eth",
//   },
//   {
//     artist_id: "2",
//     artist_name: "jangyeon",
//     artist_image: "./img/artist.jpg",
//     art_num: "12",
//     art_image: "./img/NFT2.jpg",
//     art_name: "good",
//     art_info: "first jangyeon art",
//     art_update: "2021-09-16",
//     art_price: "10eth",
//   },
//   {
//     artist_id: "3",
//     artist_name: "jeongseup",
//     artist_image: "./img/artist.jpg",
//     art_num: "13",
//     art_image: "./img/NFT3.jpg",
//     art_name: "nice",
//     art_info: "first jeongseup art",
//     art_update: "2021-09-17",
//     art_price: "10eth",
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//     artistId = data[i].artist_id;
//     artistName = data[i].artist_name;
//     artistImage = data[i].artist_image;
//     nftNum = data[i].art_num;
//     artImg = data[i].art_image;
//     artInfo = data[i].art_info;
//     artDate = data[i].art_update;
//     artPrice = data[i].art_price;

//     artInfoList += `
// <ul class="ownedNftList">
// <li class="ownedNftRow">
//   <img class="ownedNft" src="${artImg}" />
// </li>
// <li class="ownedNftRow">
//   <img class="ownedNft" src="${artImg}" />
// </li>
// <li class="ownedNftRow">
//   <img class="ownedNft" src="${artImg}" />
// </li>
// <li class="ownedNftRow">
//   <img class="ownedNft" src="${artImg}" />
// </li>
// </ul>
// `;
// }
// document.querySelector(".artist__nftCardsList").innerHTML = artInfoList;
