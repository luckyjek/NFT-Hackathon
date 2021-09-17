require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

require("dotenv").config();
const { API_URL, PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// console.log(API_URL, PRIVATE_KEY);

// module.exports = {
//     solidity: "0.8.0",
//     defaultNetwork: "hardhat",
//     networks: {
//         hardhat: {},
//         ropsten: {
//             url: API_URL,
//             accounts: [`0x${PRIVATE_KEY}`],
//         },
//     },
// };
