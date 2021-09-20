"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    confirmPw = document.querySelector("#confirm-pw"),
    registerBtn = document.querySelector("#button");

// console.log(id, pw, registerBtn);
registerBtn.addEventListener("click", register);

function register() {
    // 아이디 값이 비어있으면
    if (!id.value) return alert("아이디를 입력해주세요");
    if (pw.value !== confirmPw.value) {
        return alert("비밀번호 불일치");
    }

    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}
