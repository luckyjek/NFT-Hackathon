require("dotenv").config();
const API_URL = process.env.API_URL;
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
// const web3 = createAlchemyWeb3(API_URL)
// console.log(JSON.stringify(contract.abi));

const contractAddress = "0x61b7e1b4766f0a4222e429eac1ea040ea41cd392";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
