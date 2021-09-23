const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// 노란색 오른쪽 덮어쓰기
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// 노란색 왼쪽 덮어쓰기
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// 프로필 이미지 미리보기
function profileClick() {
  document
    .querySelector("#inputMyFile")
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
        .querySelector("#previewImg")
        .setAttribute("src", recentImageDataUrl);
    }
  });
}

profileClick();

// sign Up 버튼 누르면 사용자 데이터 저장
let userId = document.getElementById("signUp__id").value;
let userPs = document.getElementById("signUp__ps").value;
let userRePs = document.getElementById("signUp__confirmPs").value;
let userChk = document.getElementById("signUp__chk").value;
let userImg = document.getElementById("signUp__img").value;

function signUp() {}
