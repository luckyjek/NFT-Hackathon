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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);

        const usreInfo = usersKeys.reduce((newUser, info) => {
            // idx에 맞는 User.id, User.pw .. 를 newUser에 넣음
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return usreInfo;
    }
}

module.exports = UserStorage;
