"use strict";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

var art_id;
var web3;
var userAccount;
var myContract;

(async function init() {
    web3 = new Web3(Web3.givenProvider);
    userAccount = await web3.eth.requestAccounts();
    console.log("Current User Account is", userAccount);

    getContract();
})();

function getArtId() {
    var url_string = window.location.href.toLocaleLowerCase();
    var url = new URL(url_string);
    art_id = url.searchParams.get("art_id");
}

async function getArt() {
    getArtId();
    try {
        var result = await axios({
            method: "post",
            url: "/getArt",
            data: {
                param: [art_id],
            },
        });

        console.log(result.data[0]);
    } catch (err) {
        console.log(err);
    }

    const artist_name = result.data[0].user_name;
    console.log(artist_name);

    try {
        var result2 = await axios({
            method: "post",
            url: "/getSpecifiedArtList",
            data: {
                param: [artist_name],
            },
        });

        console.log(result2.data);
    } catch (err) {
        console.log(err);
    }

    // 여기다 그
    // 여기에 오른쪽 그리는 함수
}

// function getArt() {
//     getArtId();
//     axios({
//         method: "post",
//         url: "/getArt",
//         data: {
//             // 2번이 NFT1.jpg
//             param: [art_id],
//         },
//     })
//         .catch((e) => {
//             console.log(e);
//         })
//         .catch((e) => {
//             console.log(e);
//         })
//         .then(function (res) {
//             let art = res.data[0];
//             let imagePath = art.art_image_path;
//             let accountId = art.account_id;
//             let artName = art.art_name;
//             let artCreated_at = art.art_created_at;
//             let artPrice = art.art_price;
//             let artDescription = art.art_description;
//             let artistImg = art.artist_img;
//             let serialNumber = art.serial_number;
//             let artistQuotes = art.artist_quotes;
//             // getImage(imagePath);
//             // console.log(art);

//             const cardImgDiv = document.getElementsByClassName("row")[0];

//             // let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;
//             let artInfo = `
//             <!-- NFT 상세 부분 -->
//             <div class="left">
//               <!-- NFT Card 이미지 -->
//               <div class="artInfo__cardImg">
//               <img class="artInfo__img" src="/images/${imagePath}"} />
//               </div>
//               <!-- NFT Card 제목, 아티스트 이름, NFT 넘버 -->
//               <div class="artInfo__textBox">
//                 <div class="artInfo__top">
//                   <div class="artInfo__title">
//                     <h2 class="nftText__title">${artName}</h2>
//                     <h3 style="margin-top:20px">${serialNumber}</h3>
//                     <h6 class="nftText__artist">Created by ${accountId}</h6>
//                   </div>
//                   <div class="artInfo__price">
//                     <span class="nftText__price">
//                       <i class="fab fa-ethereum fa-sm"></i>
//                       <!-- ETH 가격 -->
//                       ${artPrice}
//                     </span>
//                   </div>
//                 </div>
//                 <div class="artInfo__description">
//                   <h5>작품 설명</h5>
//                   <p class="nftText__description" style="margin-bottom:8px;">
//                     ${artDescription}
//                   </p>
//                   <p
//                   >${artCreated_at}</p>
//                 </div>
//                 <div class="artInfo__btn">
//                   <button class="nftText__btn" onclick="artInfo__donateBtn()">
//                     Donate
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <!--오른쪽 부분_아티스트-->
//             <div class="right">
//               <!-- 오른쪽 부분 아티스트 프로필 이미지 -->
//               <div class="artistProfile">
//                 <div class="artistProfile__imgs">
//                   <img class="artistProfile__img" src="${artistImg}" alt="" />
//                 </div>
//                 <div class="artistProfile__info">
//               <h4 class="artistProfile__name">${accountId}</h4>
//               <p>
//                 ${artistQuotes}
//               </p>
//             </div>
//               </div>

//               <!--오른쪽 부분 아티스트가 발행한 NFT 리스트.. ? -->
//               <div class="artist__nftList">
//                 <span class="artist__nftListTitle"> 아티스트가 발행한 NFT </span>
//               </div>

//               <!-- 오른쪽 부분 아티스트가 발행한 NFT 카드 리스트 -->
//               <div class="artist__nftCardsList">
//                 <div id="box">
//                   <div class="card">
//                     <div class="thumb">
//                       <img class="artInfo__img thumb" src="/images/${imagePath}"} />
//                     </div>
//                     <div class="infos">
//                       <h2 class="title">블루,핑크그녀</h2>
//                       <h3 class="composition">
//                         <span class="color"></span>
//                       </h3>
//                       <h3 class="type">2021.09.24</h3>
//                       <h4 class="price"></h4>
//                       <h4 class="code"></h4>
//                       <p class="txt">
//                         핑크를 사랑한 그녀는,<br />
//                         오늘도 저 먼 곳<br />
//                         어딘가를 바라봅니다 <br />
//                         그곳은 바로...바로...바로...바로...바로...바로...바로...
//                       </p>
//                       <a href="#"><h3 class="details">view details</h3></a>
//                     </div>
//                   </div>
//                   <div class="card">
//                     <div class="thumb2">
//                       <img class="artInfo__img thumb" src="/images/${imagePath}"} />
//                     </div>
//                     <div class="infos">
//                       <h2 class="title">사랑을담은,하트</h2>
//                       <h3 class="composition">
//                         <span class="color"></span>
//                       </h3>
//                       <h3 class="type">2021.09.23</h3>
//                       <h4 class="price"></h4>
//                       <h4 class="code"></h4>
//                       <p class="txt">
//                         핑크하우스,<br />
//                         오래전부터 그리워하던<br />
//                         나의 끝은<br />
//                         이곳에서...곳에서...곳에서...곳에서...곳에서...곳에서...
//                       </p>
//                       <a href="#"><h3 class="details">view details</h3></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`;

//             cardImgDiv.innerHTML = artInfo;
//         });
// }

// 사용자 지갑을 확인 후 결제창
function artInfo__donateBtn() {
    if (userAccount) {
        console.log("donate!");
        getMetaData();
        getTokenURI();
        // location.href = "paymentGiver";
    } else {
        alert("Metamask connect first!");

        web3.eth.requestAccounts().then((accounts) => {
            userAccount = accounts[0];
            console.log("Login Address is :", userAccount);
        });
    }
}

// init function 1
function getContract() {
    myContract = new web3.eth.Contract(ArtIPFSTokenABI, ArtIPFSTokenCA);
    console.log("myContract Contract Connected!", myContract);

    myContract.events
        .allEvents({}, function (error, event) {
            console.log("Now on, Watching NewArt event in my contract!");
            if (!error) console.log("event", event);
        })
        .on("data", function (event) {
            console.log(event);
        });
}

async function getMetaData() {
    var tokenName = await myContract.methods.name().call();
    var tokenSymbol = await myContract.methods.symbol().call();
    var tokenSupply = await myContract.methods.totalSupply().call();
    console.log(
        `tokenName is ${tokenName} \r
         tokenSymbol is ${tokenSymbol} \r 
         currentSupply is ${tokenSupply}
         `
    );
}

async function getTokenURI(_tokenId) {
    var _tokenId = 1;

    var tokenURI = await myContract.methods.tokenURI(_tokenId).call();
    console.log(tokenURI);
}
// 결제 완료 후 "나의 NFT 확인" 버튼 등장
// const artInfoModal = document.querySelector(".artInfoModal");
// const artInfoBtn = document.querySelector(".artInfoModal__btn");

// artInfoBtn.addEventListener ("" {
//   modal.style.display="block";
// })
