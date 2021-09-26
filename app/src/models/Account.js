"use strict";
const auth = require("../config/auth");
const sys = require("../config/db");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const AccountSQL = require("./AccountSQL");

class Account {
    constructor(body) {
        this.body = body;
    }

    // 특정 유저의 데이터를 가져옵니다.
    async getAccount() {
        const client = this.body;
        console.log("req.body is", client);

        try {
            const user = await sys.db("getAccount", client.account_id);
            if (user) {
                return { success: true, user };
            }
        } catch (err) {
            return { success: false, err };
        }
    }

    async getProfileAll() {
        const clients = this.body;
        try {
            const user = await AccountSQL.getAccountInfo2(clients);
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
        try {
            const user = await sys.db("getAccount", client.account_id);
            if (user) {
                if (
                    user.account_id === client.account_id &&
                    bcrypt.compareSync(client.password, user.password)
                ) {
                    var token = jwt.sign(
                        { account_id: user.account_id },
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
                eval_id: client.account_id,
                class_id: client.wallet_address,
                order: client.profile_image_path,
                type: client.email,
                content: bcrypt.hashSync(client.password, 8),
            });

            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Account;
