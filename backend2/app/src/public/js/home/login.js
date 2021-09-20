"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("#button");

// console.log(id, pw, loginBtn);
loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    // console.log(req);
    // console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        // .then(console.log(res));
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            // console.error("로그인 중 에러 발생");
            console.error(new Error("로그인 중 에러 발생"));
        });
}
