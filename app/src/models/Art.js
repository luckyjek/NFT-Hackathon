"use strict";

const sys = require("../config/db");

class Art {
    constructor(body) {
        // req.body
        this.body = body;
    }

    // async getArtInfo() {
    //     console.log("getArtInfo in Art.js");
    //     try {
    //         console.log("try");
    //         res.send(await sys.db("getArtInfo"));
    //     } catch (err) {
    //         res.status(500).send({
    //             error: err,
    //         });
    //     }
    // }
    async showArt() {
        const body = this.body;
        try {
            const art = await ArtSQL.getArtInfo(body.id);
            if (art) {
                return { success: true, art };
            }
        } catch (err) {
            return { success: false, err };
        }
    }

    // async registerArt() {
    //     const body = this.body;
    //     try {
    //         const response = await ArtSQL.registerArt(body);
    //         return response;
    //     } catch (err) {
    //         return { success: false, err };
    //     }
    // }
}

module.exports = Art;
