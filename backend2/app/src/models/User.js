"use strict";
const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        // UserStorage에 있는 모든 유저들의 정보
        const { id, pw } = UserStorage.getUserInfo(body.id);
        console.log(id, pw);
        // 사용자 입력 값
        // console.log(this.body.id, this.body.pw);
        // undefined
        if (id) {
            if (id === this.body.id && pw === this.body.pw) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호 오류" };
        }
        return { success: false, msg: "존재하지 않는 아이디" };
    }

    register() {
        const body = this.body;
        const response = UserStorage.save(body);
        return response;
    }
}
// const user = new User("abc");
// console.log(user);s
module.exports = User;
