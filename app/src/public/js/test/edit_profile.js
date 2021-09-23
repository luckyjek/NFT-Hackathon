function profile() {
    document
        .querySelector("#myFileInput")
        .addEventListener("change", function () {
            // console.log(this.files);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                // console.log(reader.result);
                localStorage.setItem("recent-image", reader.result);
            });
            reader.readAsDataURL(this.files[0]);
        });

    document.addEventListener("DOMContentLoaded", () => {
        const recentImageDataUrl = localStorage.getItem("recent-image");
        if (recentImageDataUrl) {
            document
                .querySelector("#imgPreview")
                .setAttribute("src", recentImageDataUrl);
        }
    });
}

profile();

//button _ 변경사항저장
function submit() {
    let nickName = document.getElementById("nickName").value;
    let emailAddr = document.getElementById("emailAddr").value;
    console.log("nickName:" + nickName + "emailAddr:" + emailAddr);

    //순서에 맞게 넣고, 빼고를 하려고 사용하는것이다.
    var dataList = []; //배열 이 리스트이다. / 클래스는 객체

    var data = {
        nickName: nickName,
        emailAddr: emailAddr,
    };

    console.log(data);

    dataList.push(data);
    // dataList.push(data);
    // dataList.push(data);
    console.log("dataList :", dataList);
}
