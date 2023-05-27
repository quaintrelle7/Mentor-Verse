import web3 from "./web3";

const MentorAbi = require("./build/mentor.json");
const NFTAbi = require("./build/nft.json");

const contractAddress = "0x2EEFE8971F5d189ed20Da18aD22c103D486579cF";

const NFTContractAddress = "0xf9fA7f55a571B847e29Af95eE2FA4145ED1EF62B";

export const MentorContract = new web3.eth.Contract(MentorAbi, contractAddress);

export const NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);
