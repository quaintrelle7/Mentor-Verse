import web3 from "./web3";

const MentorAbi = require("./build/mentor.json");

const contractAddress = "0x4d8ca03988bF4d6b69CB932b4253422ded47E08e";

export const MentorContract = new web3.eth.Contract(MentorAbi, contractAddress);
