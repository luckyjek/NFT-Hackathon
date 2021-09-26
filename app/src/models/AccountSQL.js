"use strict";

var bcrypt = require("bcryptjs");
const { dbPool } = require("../config/db");

// Profile
class AccountSQL {
    static getAccountInfo(account_id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM account WHERE account_id = ?;";
            dbPool.query(query, [account_id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static getAccountInfo2() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM account;";
            dbPool.query(query, (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data);
            });
        });
    }

    // Register
    static async register(account) {
        return new Promise((resolve, reject) => {
            const query =
                // "INSERT INTO account(account_id, wallet_address, profile_image_path, email, password) VALUES(?, ?, ?, ?, ?);";
                "INSERT INTO account(account_id, name, wallet_address, profile_image_path, password) VALUES(?, ?, ?, ?, ?);";
            dbPool.query(
                query,
                [
                    account.account_id,
                    account.name,
                    account.wallet_address,
                    account.profile_image_path,
                    // account.email,
                    bcrypt.hashSync(account.password, 8),
                ],
                (err) => {
                    if (err) reject(`${err}`);
                    else resolve({ success: true });
                }
            );
        });
    }
}

module.exports = AccountSQL;
