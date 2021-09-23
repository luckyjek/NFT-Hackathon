"use strict";

const account_id = document.querySelector("#account_id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  if (!account_id.value) return alert("Please enter Account ID!");
  if (!password.value) return alert("Please enter Password!");
  
  const req = {
    account_id: account_id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Errors!");
    });
}
