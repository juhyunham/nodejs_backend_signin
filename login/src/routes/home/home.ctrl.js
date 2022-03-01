"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const userStorage = require("../../models/UserStorage");

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    const users = userStorage.getUsers("id", "pw");

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      const response = {};
      if (users.psword[idx] === pw) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
