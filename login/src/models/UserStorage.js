"use strict";

class UserStorage {
  static #users = {
    id: ["hamju", "hamsarang", "kiki"],
    psword: ["1234", "12345", "kiki1"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }

      return newUsers;
    }, {});
    return;
  }
}

module.exports = UserStorage;
