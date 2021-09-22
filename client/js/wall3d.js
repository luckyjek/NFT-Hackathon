//전역변수는 전역공간에 정의가 되는 애들이라서, 누구나 접근할 수 있는 변수이기때문에
//나중에 충돌 가능성도 많기때문에 최대한 안쓰는것이 좋다.
//따라서 전역변수를 회피하기 가장 좋은 방법은,  즉시 실행함수 안에다가 넣는것이다. () () ;
(function () {
    //house를 이동시키기위해 가져온다.
    const stageElem = document.querySelector(".stage");
    const houseElem = document.querySelector(".house");
    const barElem = document.querySelector(".progress-bar");
    const mousePos = { x: 0, y: 0 };
    //스크롤바 전체 높이 body에 접근해야된다. 여기서 window의 높이 (현재 창 사이즈 )
    //즉, 현재문서 높이에서 창 높이를 빼준다. 따라서 전체 스크롤 할 수 있는 범위가 된다.
    let maxScrollValue; //초기값 0

    //(창의 크기가 바뀔때마다) resize가 될때마다 resizeHandler가 실행이 되면서, maxScrollValue가 새로 세팅이된다.
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    //scroll이벤트를 발생시킨다.
    window.addEventListener("scroll", function () {
        //스크롤된 양에따라 움직여야하므로, 우리가 얼마나 스크롤을 했는지 수치화 할 수 있어야한다.
        //얼마나 스크롤을 했는지를 수치화 할 수 있어야한다  그 속성이바로 window객체의 pageYOffset 이며, px값이 찍힌다.
        //이 값을 이용하여, zoom in zoom out 처리를 해준다.

        //pageYOffset / maxScrollValue 이렇게만 쓰면 0~1 부터 작은 값이 출력이 되기때문에, *1000을 해준다.
        //그럼 0~1000이 된다. 그럼 멤시멈이 0부터 1이아닌, 0부터 1000이 된다 그리고 -490은 .house에있는 거리를
        //스크롤 했을때 바로 글씨 벽이 튀어나오지않게 하게끔 하기위해서이다.
        //스크롤 되는 양을 줄이기 위해서 즉, 맨 끝에 있는 벽의 공간을 주기위해 1000값을 980으로 조정했다.

        //console.log(pageYOffset / maxScrollValue); //비율로 나타냄 -> 이 비율을 이용해서 house조절
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        // .gallery -> position: fixed; 를 해주어서 가운데로 보이는 것이 가능하다.
        houseElem.style.transform = "translateZ(" + zMove + "vw)";

        //progress bar 시작
        //전체 스크롤 할 수 있는 값 분의 현재스크롤 얼만큼 했는지 *100% 로 만들어준다.
        barElem.style.width = scrollPer * 100 + "%";
    });

    //마우스 현재 위치 알아내기
    window.addEventListener("mousemove", function (e) {
        //console.log(e.clientX, e.clientY);
        //가운데가 0 됐으니까, 비율대로 회전각도만 전해주면된다.
        //전체윈도우 폭 분에 현재 마우스의 X위치 에다가 비율 *2 한 값을 -1 해줬다
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        //전체윈도우 길이 분에 현재 마우스의 y위치 에다가 비율 *2 한 값을 +1 해줬다
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

        //위의 계산한 값으로 활용하자.
        stageElem.style.transform =
            "rotateX(" +
            mousePos.y * 50 +
            "deg) rotateY(" +
            mousePos.x * 50 +
            "deg)";
    });

    // 윈도우 사이즈가 변경될 때 마다  maxScrollValue가 변경되게 해줄 필요가 있다.
    // 왜냐하면 사용자는 수시로 창 사이즈를 변경하는 경우가 허다하고, 모바일 기기같은 경우는
    // 회전을 할 수 있는 경우도있다. -> 따라서 이러한것을 다 대응해줘야한다.
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
})();

// modal test _ show
function viewF() {
    let openLink = document.querySelector(".open-link");
    console.log(openLink);
    openLink.style.display = "inline-block";
}

//test_remove
function removeF() {
    let openLink = document.querySelector(".open-link");
    openLink.style.display = "none";
}

// getGalleryData
axios({
    method: "get",
    url: "https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproducList",
    responseType: "json",
}).then(function (response) {
    console.log(response.data);
});

//testData
var data = [
    {
        artist_id: "0",
        artist_name: "eunkyung",
        art_num: "10",
        art_image: "./uploads/images/10",
        art_info: "first eunkyung art",
        art_update: "2021-09-14",
        art_price: "10eth",
    },
    {
        artist_id: "1",
        artist_name: "heekyung",
        art_num: "11",
        art_image: "./uploads/images/11",
        art_info: "first heekyung art",
        art_update: "2021-09-15",
        art_price: "10eth",
    },
    {
        artist_id: "2",
        artist_name: "jangyeon",
        art_num: "12",
        art_image: "./uploads/images/12",
        art_info: "first jangyeon art",
        art_update: "2021-09-16",
        art_price: "10eth",
    },
    {
        artist_id: "3",
        artist_name: "jeongseup",
        art_num: "13",
        art_image: "./uploads/images/13",
        art_info: "first jeongseup art",
        art_update: "2021-09-17",
        art_price: "10eth",
    },
];

function showItem() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        //먼저 저 하나의큰 템플릿?을 하나 만들어 준뒤
        const item_left = document.querySelector(".grid-item-con");
        //for문을 돌린다.
        //그때 이미 만들어진 데이터와함께 만들어준다.

        // for (let j = 8; item_left < j; item_left++) {
        // console.log("item_left1", hi);
        item_left.innerHTML = `
            <div class="grid-item">
            arrtist_id : ${data[0].artist_id}<br/>
            artist_name : ${data[0].artist_name}<br/>
            art_num : ${data[0].art_num}<br/>
            art_image : ${data[0].art_image}<br/>
            art_info : ${data[0].art_info}<br/>
            </div>
            <button
            class="item-button-left button1"
            onclick="viewF()"
            ></button>
            `;
        // }
    }

    // item_left.innerHTML = `
    // <div class="grid-item">arrtist_id : ${data[0].artist_id}</div>
    // <button class="item-button-left"></button>
    // `;
}

showItem();
