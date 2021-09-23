"use strict";

const sys = require("../config/db");

app.post("/api/:alias", async (req, res) => {
  console.log("alias computed!");
  console.log(req.params.alias);
  console.log(req.body.param);

    // Register
    static async registerArt(art) {
        return new Promise((resolve, reject) => {
            const query =
                "INSERT INTO artinfo(account_id, art_name, art_price, art_image_path, art_description) VALUES(?, ?, ?, ?, ?);";
            db.query(
                query,
                [
                    art.account_id,
                    art.art_name,
                    art.art_price,
                    art.art_image_path,
                    art.art_decription,
                ],
                (err) => {
                    if (err) reject(`${err}`);
                    else resolve({ success: true });
                }
            );
    try {
        res.send(
            await sys.db(req.params.alias, req.body.param, req.body.where)
        );
    } catch (err) {
        res.status(500).send({
            error: err,
        });
    }
});

module.exports = ArtSQL;
