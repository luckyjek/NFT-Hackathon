// All NFTs 페이지
"use strict";
console.log("use script");

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let artList = [];

let artSelectList = "";
function getArtList() {
    console.log("getArtList");
    axios({
        method: "post",
        url: "/getArtList",
    })
        .catch((e) => {
            console.log("catch");
            console.log(e);
            // s;
        })
        .then(function (res) {
            console.log("res");
            artList = res.data;
            console.table(artList);

            for (let i = 0; i < artList.length; i++) {
                let art_id = artList[i].art_id;
                let account_id = artList[i].account_id;
                let art_name = artList[i].art_name;
                let art_created_at = artList[i].art_created_at;
                let art_price = artList[i].art_price;
                let art_image_path = artList[i].art_image_path;
                let art_description = artList[i].art_description;

                artSelectList += `
                     <article id="article1" onclick="NFTs()">
                     <img class="nftImgs" src="/images/${art_image_path}"} />
                     <div class="text">
                       <h3 class="nftText nftText__title" id="nftName">${art_name}</h3>
                       <h3 class="nftText nftText__price" id="nftPrice">${art_price}</h3>
                       <p class="nftText__description" id="nftDescribe">
                       ${art_description}
                       </p>
                     </div>
                       <div class="container__profile">
                         <img class="artist__img"
                          src="/images/profile/4.jpg"
                         />
                         <div class="container__profile__text">
                          <p class="nftText nftText__id" id="nftCreatedBy">Created By ${account_id}</p>
                          <h2 class="nftText nftText__date" id="nftDate">${art_created_at}</h2>
                         </div>
                     </div>
                    </article>`;
            }

            document.querySelector(".grid").innerHTML = artSelectList;
        });
    // .catch((error) => console.log(" catch 에러!"));
}

//http://localhost:5000/donateNft
//clubList.ejs에 DB에서 조회한 클럽목록을 넘기는 예제소스
