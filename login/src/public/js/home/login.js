"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginButton");

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  console.log(JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(req),
  });
};

loginBtn.addEventListener("click", login);
