require("dotenv").config({ path: "./.env" });
const { PINATA_API_KEY, PINATA_API_SECRET } = process.env;
console.log(process.env);
const axios = require("axios");
const url = "https://api.pinata.cloud/data/testAuthentication";
console.log(PINATA_API_KEY, PINATA_API_SECRET);
// console.log(module);

// https://gateway.pinata.cloud/ipfs/Qmdc4o82hRV49ZFpVLG8TZvjfZpDUkGexZy61UJGubexwE
let data = {
    attributes: [
        {
            trait_type: "Dragon Kind",
            value: "Night Fury",
        },
        {
            trait_type: "Skin Color",
            value: "Black",
        },
    ],
    description: "My favorite dragon",
    image: "https://gateway.pinata.cloud/ipfs/QmXxHLZwsSMydqqHnvEA6L36wBSYzNmShrov81gATVZFZc",
    name: "Toothless",
};

const testAuthentication = () => {
    return axios
        .get(url, {
            headers: {
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_API_SECRET,
            },
        })
        .then(function (response) {
            // handle your response here
            console.log(response);
        })
        .catch(function (error) {
            //handle error here
            console.log(error);
        });
};

testAuthentication();
