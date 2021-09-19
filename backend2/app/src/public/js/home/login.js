"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("button");

// console.log(id, pw, loginBtn);
loginBtn.addEventListener("click", login);

function login() {
    console.log("login!");
    console.log(id.value);
    console.log(pw.value);
}
