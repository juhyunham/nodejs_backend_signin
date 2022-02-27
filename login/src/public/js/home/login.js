"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#loginButton");

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
		header: {
			"Content-type": "application/json"
		}
    body: JSON.stringify(req),
  });
};

loginBtn.addEventListener("click", login);
