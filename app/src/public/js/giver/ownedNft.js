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

    loadGiver(artList);
    loadShowArt(artList);
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

const giverProfile1 = document.querySelector(".grid");

function loadShowArt(artList) {
    console.log("loadShowArt", artList);

    let ownedInfoList = "";

    // for (let i = 0; i < artList.length; i++) {
    let artId = artList[0].art_id;
    let profileImagePath = artList[0].profile_image_path;
    let artCreatedAt = artList[0].art_created_at;
    let artDescription = artList[0].art_description;
    let artImagePath = artList[0].art_image_path;
    let artName = artList[0].art_name;
    let artPrice = artList[0].art_price;
    let artistQuotes = artList[0].artist_quotes;
    let serialNumber = artList[0].serial_number;
    let userName = artList[0].user_name;
    console.log(artId, userName);

    ownedInfoList += ` 
          <article id="${artId}" onclick="linkClickEvent(this.id);">
          <img
              class="nftImgs"
              src="/images/${artImagePath}"
              }=""
          />
          <div class="text">
              <h3 class="nftText nftText__title" id="nftName">
                  ${artName}
              </h3>
              <h3>${serialNumber}</h3>
              <div class="donate__price">price</div>
              <div class="donate__eth">
                  <h3 id="nftPrice">
                      <i
                          class="fab fa-ethereum fa-sm"
                          aria-hidden="true"
                      ></i>
                      ${artPrice}
                  </h3>
              </div>
              <p
                  class="nftText__description"
                  id="nftDescribe"
              >
                  ${artDescription}
              </p>
          </div>
          <div class="container__profile">
              <img class="artist__img" src="/images/${profileImagePath}" />
              <div class="container__profile__text">
                  <p
                      class="nftText nftText__id"
                      id="nftCreatedBy"
                  >
                      Created By ${userName}
                  </p>
                  <h2
                      class="nftText nftText__date"
                      id="nftDate"
                  >
                      ${artCreatedAt}
                  </h2>
              </div>
          </div>
      </article>
    `;
    // }
    giverProfile1.innerHTML = ownedInfoList;
    // grid
}
