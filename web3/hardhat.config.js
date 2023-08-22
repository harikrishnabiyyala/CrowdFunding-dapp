require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: ["0xdb51e6835438c6c7d3ba18fcba564af1fd96e83711eba3227a121c1b3056093b"]
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
