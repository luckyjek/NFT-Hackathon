"use strict";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

var artList;
var user_address;

const giverProfile = document.getElementById("giverProfile");

function getUserAddress() {
    var url_string = window.location.href.toLocaleLowerCase();
    var url = new URL(url_string);
    user_address = url.searchParams.get("user_address");
}

async function getArt() {
    getUserAddress();
    try {
        var result = await axios({
            method: "post",
            url: "/getOwnedNft",
            data: {
                param: [user_address],
            },
        });

        artList = result.data;
        console.table(artList);
    } catch (err) {
        console.log(err);
    }

    // loadGiver(mintArt);
}

function loadGiver(artList) {
    var art = artList[0];

    var giverInfo = `
    <div class="mynft-main">
                    <div class="container-owndNft">
                        <div class="artistProfile__imgs">
                            <img
                                class="artistProfile__img"
                                src="/images/${art.profile_image_path}"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <!-- <div class="row-owndNft"> -->
                    <div id="user_address" class="row-owndNft1">
                        ${user_address}
                    </div>
                    <div id="user_name" class="row-owndNft2">
                    ${art.user_name}
                    </div>
                </div>`;

    giverProfile.innerHTML = giverInfo;
}
let ownedInfoList = "";

for (let i = 0; i < data.length; i++) {
    artistId = data[i].artist_id;
    artistName = data[i].artist_name;
    artistImage = data[i].artist_image;
    nftNum = data[i].art_num;
    artImg = data[i].art_image;
    artName = data[i].art_name;
    artInfo = data[i].art_info;
    artDate = data[i].art_update;
    artPrice = data[i].art_price;

    ownedInfoList += ` <ul class="account__ownedNftList">
    <li class="account__ownedNftRow">
      <img class="account__ownedNft" src="${artImg}" />
      <div class="account__top">
        <div class="account__title">
          <h2 class="account__nftTitle">${artName}</h2>
          <h3 class="account__number">${nftNum}</h3>
          <h6 class="account__artist">Created by ${artistName}</h6>
        </div>
        <div class="account__price">
          <span class="account__price"
            ><i class="fab fa-ethereum fa-sm"></i>${artPrice}</span
          >
        </div>
      </div>
    </li>
   
    <li class="account__ownedNftRow">
    <img class="account__ownedNft" src="${artImg}" />
    <div class="account__top">
      <div class="account__title">
        <h2 class="account__nftTitle">${artName}</h2>
        <h3 class="account__number">${nftNum}</h3>
        <h6 class="account__artist">Created by ${artistName}</h6>
      </div>
      <div class="account__price">
        <span class="account__price"
          ><i class="fab fa-ethereum fa-sm"></i>${artPrice}</span
        >
      </div>
    </div>
  </li>
  <li class="account__ownedNftRow">
  <img class="account__ownedNft" src="${artImg}" />
  <div class="account__top">
    <div class="account__title">
      <h2 class="account__nftTitle">${artName}</h2>
      <h3 class="account__number">${nftNum}</h3>
      <h6 class="account__artist">Created by ${artistName}</h6>
    </div>
    <div class="account__price">
      <span class="account__price"
        ><i class="fab fa-ethereum fa-sm"></i>${artPrice}</span
      >
    </div>
  </div>
  </li>
  <li class="account__ownedNftRow">
  <img class="account__ownedNft" src="${artImg}" />
  <div class="account__top">
    <div class="account__title">
      <h2 class="account__nftTitle">${artName}</h2>
      <h3 class="account__number">${nftNum}</h3>
      <h6 class="account__artist">Created by ${artistName}</h6>
    </div>
    <div class="account__price">
      <span class="account__price"
        ><i class="fab fa-ethereum fa-sm"></i>${artPrice}</span
      >
    </div>
  </div>
  </li>
    </ul>
    `;
}
