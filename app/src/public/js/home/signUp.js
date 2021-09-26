"use strict";

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
// function profileClick() {
//   document
//     .querySelector("#inputMyFile")
//     .addEventListener("change", function () {
//       // console.log(this.files);
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         // console.log(reader.result);
//         localStorage.setItem("recent-image", reader.result);
//       });
//       reader.readAsDataURL(this.files[0]);
//     });

//   document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataUrl = localStorage.getItem("recent-image");
//     if (recentImageDataUrl) {
//       document
//         .querySelector("#previewImg")
//         .setAttribute("src", recentImageDataUrl);
//     }
//   });
// }

// profileClick();

// sign Up 버튼 누르면 사용자 데이터 저장
// let userId = document.getElementById("signUp__id").value;
// let userPs = document.getElementById("signUp__ps").value;
// let userRePs = document.getElementById("signUp__confirmPs").value;
// let userChk = document.getElementById("signUp__chk").value;
// let userImg = document.getElementById("signUp__img").value;

// function signUp() {}


const account_id = document.querySelector("#account_id"),
  name_str = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm_password"),
  // emali = document.querySelector("#email"),
  profile_image = document.querySelector("#profile_image"),
  wallet_address = document.querySelector("#wallet_address"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!account_id.value) return alert("Please enter account ID.");
  if (password.value !== confirmPassword.value)
    return alert("Incorrect password.");

  const req = {
    account_id: account_id.value,
    name: name_str.value,
    password: password.value,
    // email: emali.value,
    wallet_address: wallet_address.value
  };

  fetch("/signup", {
      method: "POST",
      body: new FormData(profile_image.file)
    });

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Error occurs on register");
    });
}
