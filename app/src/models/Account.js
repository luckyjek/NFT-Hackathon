"use strict";
const auth = require("../config/auth");
const { sys } = require("../config/db");
var jwt = require("jsonwebtoken");

class Account {
    constructor(body) {
        this.body = body;
    }
    // 특정 유저의 데이터를 가져옵니다.
    async getAccount() {
        const client = this.body;
        console.log("req.body is", client);

        try {
            const user = await sys.db("getAccount", client.user_id);
            if (user) {
                return { success: true, user };
            }
        } catch (err) {
            return { success: false, err };
        }
    }

    // 로그인정보가 DB에 존재하는지 확인합니다.
    async login() {
        const client = this.body;
        console.log(client.user_id, client.user_password);

        try {
            const result = await sys.db("getAccount", client.user_id);
            const user = result[0];

            if (user) {
                if (
                    user.user_id == client.user_id &&
                    user.user_password == client.user_password
                ) {
                    var token = jwt.sign(
                        { user_id: user.user_id },
                        auth.secret,
                        {
                            expiresIn: 86400, // 24 hours
                        }
                    );
                    return { success: true, accessToken: token };
                }
                return {
                    success: false,
                    accessToken: null,
                    msg: "Incorrect Password!",
                };
            }
            return {
                success: false,
                accessToken: null,
                msg: "Incorrect Account ID!",
            };
        } catch (err) {
            return { success: false, err };
        }
    }

    async register() {
        const client = this.body;
        console.log(client);

        try {
            const response = await sys.db("registerAccount", {
                user_id: client.user_id,
                user_name: client.user_name,
                user_password: client.user_password,
                user_address: client.user_address,
                user_type: client.user_type,
                profile_image_path: client.profile_image_path,
            });

            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Account;
