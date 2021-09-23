"use strict";

const auth = require("../config/auth");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const AccountSQL = require("./AccountSQL");

class Account {
  constructor(body) {
    this.body = body;
  }

  async getProfile() {
    const client = this.body;
    try {
        const user = await AccountSQL.getAccountInfo(client.account_id);
        if (user) {
          return { success: true, user };
        }
    } catch (err) {
        return { success: false, err };
      }
  }

  async getProfileAll() {
    // const client = this.body;
    try {
        const user = await AccountSQL.getAccountInfo2();
        if (user) {
          return { success: true, user };
        }
    } catch (err) {
        return { success: false, err };
      }
  }

  async login() {
    const client = this.body;
    try {
      const user = await AccountSQL.getAccountInfo(client.account_id);
      if (user) {
        if (user.account_id === client.account_id && 
            bcrypt.compareSync(client.password, user.password)) {
              var token = jwt.sign({ account_id: user.account_id }, 
                                      auth.secret, {
                                      expiresIn: 86400 // 24 hours
                                    });
          return { success: true, accessToken: token };
        }
        return { success: false, accessToken: null, msg: "Incorrect Password!" };
      }
      return { success: false, accessToken: null, msg: "Incorrect Account ID!" };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await AccountSQL.register(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }


}

module.exports = Account;
