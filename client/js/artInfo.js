var data = [
    {
        artist_id: "0",
        artist_name: "eunkyung",
        artist_image: "./img/artist.jpg",
        art_num: "10",
        art_image: "./img/NFT13.jpg",
        art_name: "smile",
        art_info: "first eunkyung art",
        art_update: "2021-09-14",
        art_price: "10eth",
    },
    {
        artist_id: "1",
        artist_name: "heekyung",
        artist_image: "./img/artist.jpg",
        art_num: "11",
        art_image: "./img/NFT1.jpg",
        art_name: "happy",
        art_info: "first heekyung art",
        art_update: "2021-09-15",
        art_price: "10eth",
    },
    {
        artist_id: "2",
        artist_name: "jangyeon",
        artist_image: "./img/artist.jpg",
        art_num: "12",
        art_image: "./img/NFT2.jpg",
        art_name: "good",
        art_info: "first jangyeon art",
        art_update: "2021-09-16",
        art_price: "10eth",
    },
    {
        artist_id: "3",
        artist_name: "jeongseup",
        artist_image: "./img/artist.jpg",
        art_num: "13",
        art_image: "./img/NFT3.jpg",
        art_name: "nice",
        art_info: "first jeongseup art",
        art_update: "2021-09-17",
        art_price: "10eth",
    },
];

let artInfoList = "";
for (let i = 0; i < data.length; i++) {
    artistId = data[i].artist_id;
    artistName = data[i].artist_name;
    artistImage = data[i].artist_image;
    nftNum = data[i].art_num;
    artImg = data[i].art_image;
    artInfo = data[i].art_info;
    artDate = data[i].art_update;
    artPrice = data[i].art_price;

    artInfoList += ` <div class="left">
  <div class="artInfo__cardImg">
    <img class="artInfo__img" src="${artImg}" />
  </div>
  <div class="artInfo__textBox">
    <div class="artInfo__top">
      <div class="artInfo__title">
        <h2 class="nftText__title">${artName}</h2>
        <h3 class="nftText__number">${nftNum}</h3>
        <h6 class="nftText__artist">Created by ${artistName}</h6>
      </div>
      <div class="artInfo__price">
        <span class="nftText__price"
          ><i class="fab fa-ethereum fa-sm"></i>${artPrice}</span
        >
      </div>
    </div>
    <div class="artInfo__description">
      <h5>작품 설명</h5>
      <p class="nftText__description">
      ${artInfo}
      </p>
    </div>
    <div class="artInfo__btn">
      <button class="nftText__btn" onclick="artInfo__donateBtn()">
        Donate
      </button>
    </div>
  </div>
  </div>
  <div class="right">
  <div class="artistProfile">
    <div class="artistProfile__imgs">
      <img class="artistProfile__img" src="${artistImage}" />
    </div>
    <div class="artistProfile__info">
      <h4 class="artistProfile__name">${artistName}</h4>
      <p>
      ${artInfo}
      </p>
    </div>
  </div>
  <div class="artist__nftList">
    <span class="artist__nftListTitle">이 아티스트가 발행한 NFT</span>
  </div>
  <div class="artist__nftCardsList">
    <ul class="ownedNftList">
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
    </ul>
    <ul class="ownedNftList">
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
    </ul>
    <ul class="ownedNftList">
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
    </ul>
    <ul class="ownedNftList">
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
      <li class="ownedNftRow">
        <img class="ownedNft" src="${artImg}" />
      </li>
    </ul>
  </div>
</div>
  `;
}
document.querySelector(".row").innerHTML = artInfoList;
