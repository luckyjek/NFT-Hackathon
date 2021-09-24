module.exports = {
    getArtList: {
        query: "SELECT * from t_art",
    },
    getArt: {
        query: "select * from t_art where art_id = ?",
    },
    getAccountList: {
        qurey: "SELECT * FROM t_account",
    },
    getAccount: {
        query: "SELECT * FROM t_account WHERE account_id = ?",
    },
    registerAccount: {
        query: "insert into t_account set ?",
    },
    registerArt: {
        query: "INSERT INTO t_art set ?",
    },
};
