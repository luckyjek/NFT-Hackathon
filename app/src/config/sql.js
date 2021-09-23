module.exports = {
    getArtInfo: {
        query: "SELECT * from artinfo",
    },

    // getAccountInfo: {
    //     query = "SELECT * FROM account WHERE account_id = ?"
    // }

    // static getAccountInfo2() {
    //     return new Promise((resolve, reject) => {
    //       const query = "SELECT * FROM account;";
    //       db.query(query, (err, data) => {
    //         if (err) reject(`${err}`);
    //         else resolve(data);
    //       });
    //     });
    //   }

    // // Register
    // static async register(account) {
    //     return new Promise((resolve, reject) => {
    //         const query =
    //             "INSERT INTO account(account_id, wallet_address, profile_image_path, email, password) VALUES(?, ?, ?, ?, ?);";
    //         db.query(
    //             query,
    //             [
    //                 account.account_id,
    //                 account.wallet_address,
    //                 account.profile_image_path,
    //                 account.email,
    //                 bcrypt.hashSync(account.password, 8),
    //             ],
    //             (err) => {
    //                 if (err) reject(`${err}`);
    //                 else resolve({ success: true });
    //             }
    //         );
    //     });
    // }

};
