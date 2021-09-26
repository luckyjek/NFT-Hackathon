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
            let accountId = art.account_id;
            let artName = art.art_name;
            let artCreated_at = art.art_created_at;
            let artPrice = art.art_price;
            let artDescription = art.art_description;
            let artistImg = art.artist_img;
            let serialNumber = art.serial_number;
            let artistQuotes = art.artist_quotes;
            // getImage(imagePath);
            console.log(art);

            const cardImgDiv = document.getElementsByClassName("row")[0];

            // let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;
            let artInfo = `
            <!-- NFT 상세 부분 -->
            <div class="left">
              <!-- NFT Card 이미지 -->
              <div class="artInfo__cardImg">
              <img class="artInfo__img" src="/images/${imagePath}"} />
              </div>
              <!-- NFT Card 제목, 아티스트 이름, NFT 넘버 -->
              <div class="artInfo__textBox">
                <div class="artInfo__top">
                  <div class="artInfo__title">
                    <h2 class="nftText__title">${artName}</h2>
                    <h3 style="margin-top:20px">${serialNumber}</h3>
                    <h6 class="nftText__artist">Created by ${accountId}</h6>
                  </div>
                  <div class="artInfo__price">
                    <span class="nftText__price">
                      <i class="fab fa-ethereum fa-sm"></i>
                      <!-- ETH 가격 -->
                      ${artPrice}
                    </span>
                  </div>
                </div>
                <div class="artInfo__description">
                  <h5>작품 설명</h5>
                  <p class="nftText__description" style="margin-bottom:8px;">
                    ${artDescription}
                  </p>
                  <p
                  >${artCreated_at}</p>
                </div>
                <div class="artInfo__btn">
                  <button class="nftText__btn" onclick="artInfo__donateBtn()">
                    Donate
                  </button>
                </div>
              </div>
            </div>
    
            <!--오른쪽 부분_아티스트-->
            <div class="right">
              <!-- 오른쪽 부분 아티스트 프로필 이미지 -->
              <div class="artistProfile">
                <div class="artistProfile__imgs">
                  <img class="artistProfile__img" src="${artistImg}" alt="" />
                </div>
                <div class="artistProfile__info">
              <h4 class="artistProfile__name">${accountId}</h4>
              <p>
                ${artistQuotes}
              </p>
            </div>
              </div>
    
              <!--오른쪽 부분 아티스트가 발행한 NFT 리스트.. ? -->
              <div class="artist__nftList">
                <span class="artist__nftListTitle"> 아티스트가 발행한 NFT </span>
              </div>
    
              <!-- 오른쪽 부분 아티스트가 발행한 NFT 카드 리스트 -->
              <div class="artist__nftCardsList">
                <div id="box">
                  <div class="card">
                    <div class="thumb">
                      <img class="artInfo__img thumb" src="/images/${imagePath}"} />
                    </div>
                    <div class="infos">
                      <h2 class="title">블루,핑크그녀</h2>
                      <h3 class="composition">
                        <span class="color"></span>
                      </h3>
                      <h3 class="type">2021.09.24</h3>
                      <h4 class="price"></h4>
                      <h4 class="code"></h4>
                      <p class="txt">
                        핑크를 사랑한 그녀는,<br />
                        오늘도 저 먼 곳<br />
                        어딘가를 바라봅니다 <br />
                        그곳은 바로...바로...바로...바로...바로...바로...바로...
                      </p>
                      <a href="#"><h3 class="details">view details</h3></a>
                    </div>
                  </div>
                  <div class="card">
                    <div class="thumb2">
                      <img class="artInfo__img thumb" src="/images/${imagePath}"} />
                    </div>
                    <div class="infos">
                      <h2 class="title">사랑을담은,하트</h2>
                      <h3 class="composition">
                        <span class="color"></span>
                      </h3>
                      <h3 class="type">2021.09.23</h3>
                      <h4 class="price"></h4>
                      <h4 class="code"></h4>
                      <p class="txt">
                        핑크하우스,<br />
                        오래전부터 그리워하던<br />
                        나의 끝은<br />
                        이곳에서...곳에서...곳에서...곳에서...곳에서...곳에서...
                      </p>
                      <a href="#"><h3 class="details">view details</h3></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

            cardImgDiv.innerHTML = artInfo;
        });
}

// function getImage(imagePath) {
//     const cardImgDiv = document.getElementsByClassName("artInfo__cardImg")[0];

//     let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;

//     cardImgDiv.innerHTML = imageHTML;
// }

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
