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

    artInfoList += ` 
    <div class="left">
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
  `;
}
document.querySelector(".row").innerHTML = artInfoList;
