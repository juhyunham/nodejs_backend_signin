"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginButton");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.alert);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 후 에러 발생"));
    });
}
