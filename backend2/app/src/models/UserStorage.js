"use strict";

class UserStorage {
    static #users = {
        id: ["abc1", "abc2", "abc3"],
        pw: ["123", "123", "123"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // 마지막  {} 에 넣어준다.
        return newUsers;
    }
}

module.exports = UserStorage;
