const mysql = require("mysql");
let sql = require("./sql.js");

const dbPool = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
});

dbPool.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL Connected...");
    }
});

const sys = {
    async db(alias, param = [], where = "") {
        return new Promise((resolve, reject) =>
            dbPool.query(sql[alias].query + where, param, (error, rows) => {
                console.log(sql[alias]);
                if (error) {
                    if (error.code != "ER_DUP_ENTRY") console.log(error);
                    resolve({
                        error,
                    });
                } else resolve(rows);
            })
        );
    },
};

module.exports = { sys, dbPool };
