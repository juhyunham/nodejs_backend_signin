const express = require("express");
const app = express();

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

app.listen(3000, function () {
  console.log("서버 가동");
});
