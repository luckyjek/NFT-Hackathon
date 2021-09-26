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

// // 프로필 이미지 미리보기
// function profileClick() {
//     document
//         .querySelector("#inputMyFile")
//         .addEventListener("change", function () {
//             // console.log(this.files);
//             const reader = new FileReader();
//             reader.addEventListener("load", () => {
//                 // console.log(reader.result);
//                 localStorage.setItem("recent-image", reader.result);
//             });
//             reader.readAsDataURL(this.files[0]);
//         });

//     document.addEventListener("DOMContentLoaded", () => {
//         const recentImageDataUrl = localStorage.getItem("recent-image");
//         if (recentImageDataUrl) {
//             document
//                 .querySelector("#previewImg")
//                 .setAttribute("src", recentImageDataUrl);
//         }
//     });
// }

// profileClick();
// let userId = document.getElementById("signUp-id").value;
// let userName = document.getElementById("signUp-name").value;
// let userAddress = document.getElementById("signUp-address").value;
// let userPs = document.getElementById("signUp-ps").value;
// let userConfirmPs = document.getElementById("signUp-confirmPs").value;
// let userImg = document.getElementById("signUp-img").value;
// let userType = document.querySelector('input[name="categorize"]:checked');

const userId = document.querySelector("#signUp-id"),
    userName = document.querySelector("#signUp-name"),
    userPs = document.querySelector("#signUp-ps"),
    userConfirmPs = document.querySelector("#signUp-confirmPs"),
    profile_image = document.querySelector("#profile_image"),
    userAddress = document.querySelector("#signUp-address"),
    registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    let userType = document.querySelector(
        'input[name="categorize"]:checked'
    ).value;

    if (!userId.value) return alert("Please enter account ID.");
    if (userPs.value !== userConfirmPs.value)
        return alert("Incorrect password.");

    const req = {
        user_id: userId.value,
        user_name: userName.value,
        user_password: userPs.value,
        user_address: userAddress.value,
        user_type: userType,
    };

    fetch("/files", {
        method: "POST",
        body: new FormData(profile_image.file),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("Success:", res);
        })
        .catch((err) => {
            console.error("File upload error");
        });

    fetch("/registerUser", {
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
