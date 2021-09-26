module.exports = {
    getSpecifiedArtList: {
        query: "select * from t_art where user_name = ?",
    },
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
        query: "SELECT * FROM t_account WHERE user_id = ?",
    },
    registerAccount: {
        query: "insert into t_account set ?",
    },
    registerArt: {
        query: "INSERT INTO t_art set ?",
    },
};
