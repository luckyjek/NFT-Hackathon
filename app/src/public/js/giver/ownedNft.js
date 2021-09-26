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

document.querySelector(".account__nftCardsList").innerHTML = ownedInfoList;

async function getBalance(_address) {
    var _address = "0x965ca4F0648c223C3B09e1E8bA46F9f71f7df1b8";

    var tokenURI = await myContract.methods.balanceOf(_address).call();
    console.log(tokenURI);
}
