import web3 from "./web3";

const MentorAbi = require("./build/mentor.json");

const contractAddress = "0x2EEFE8971F5d189ed20Da18aD22c103D486579cF";

export const MentorContract = new web3.eth.Contract(MentorAbi, contractAddress);
