require('dotenv').config();
let HDWalletProvider = require('truffle-hdwallet-provider');

let ropstenUrl = 'https://ropsten.infura.io/' + process.env.INFURA;
let mainnetUrl = 'https://mainnet.infura.io/' + process.env.INFURA;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 3000000,
      gasPrice: 2000000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, ropstenUrl, 0)
      },
      network_id: 3
    },
    live: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, mainnetUrl, 0)
      },
      network_id: 1,
      gasPrice: 2000000000,
      gas: 3000000,
    }
  },
  mocha: {
    useColors: true,
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
