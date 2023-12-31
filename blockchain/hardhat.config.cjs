require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const GANACHE_RPC_URL = "http://127.0.0.1:8545";

const GANACHE_MNEMONIC = process.env.GANACHE_MNEMONIC;

module.exports = {
  networks: {
    hardhat: {
      // accounts: {
      //   mnemonic: process.env.MNEMONIC,
      // },
      // accounts: accounts,
      chainId: 1337,
    },
    ganache: {
      accounts: {
        mnemonic: GANACHE_MNEMONIC,
      },
      // accounts: [
      //   `0xc7c990bf2cedab83a47afda3b02d90f627330ada1e1b86d43253f3b39e66c96b`,
      // ],
      chainId: 1337,
      saveDeployments: true,
      url: GANACHE_RPC_URL,
    },
  },
  // namedAccounts: {
  //   deployer: {
  //     default: 0,
  //   },
  // },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
      viaIR: true,
    },
  },
};
