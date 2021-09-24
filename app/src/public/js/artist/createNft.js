//initialize the plugins
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
    imageResizeTargetWidth: 256,
    imageResizeMode: "contain",

    //callback when the image is added
    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata("resize"));
    },
    imageTransformVariants: {
        thumb_medium_: (transforms) => {
            transforms.resize.size.width = 512;
            return transforms;
        },
        thumb_small_: (transforms) => {
            transforms.resize.size.width = 64;
            return transforms;
        },
    },
});
console.log("createNft 연결");

function submit() {
    console.log("hi");
    //작품명
    let fileInfo = document.querySelector(".filepond--label-action");
    let inputGroup = document.getElementById("inputGroup").value;
    let eth = document.getElementById("eth-v").value;
    let des = document.getElementById("des").value;
    let chek1 = document.getElementsByName("heckbox1").checked;
    // let chek2 = document.getElementsByName("heckbox2").value;

    console.log(
        "파일정보" +
            fileInfo +
            "작품명 :" +
            inputGroup +
            "작품금액" +
            eth +
            "작품설명" +
            des +
            "chek1" +
            chek1
    );
    // alert("작품명 :" + inputGroup+"작품금액"+eth+"작품설명"+des+"chek1"+chek1+"chek2"+chek2);

    //순서에 맞게 넣고, 빼고를 하려고 사용하는것이다.
    var dataList = []; //배열 이 리스트이다. / 클래스는 객체

    var data = {
        fileInfo: fileInfo,
        inputGroup: inputGroup,
        eth: eth,
        des: des,
        chek1: chek1,
        // "chek2": chek2
    };

    console.log(data);

    dataList.push(data);
    dataList.push(data);
    dataList.push(data);
    console.log("dataList :", dataList);
}

function agreeBtn() {
    var chkbox = document.getElementsByName("agree");
    var chk = false;

    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox[i].checked) {
            chk = true;
        } else {
            chk = false;
        }
    }

    if (chk) {
        alert("발행이 완료됐습니다");
        return false;
    } else {
        alert("모든 약관에 동의해 주세요.");
        return;
    }
}
