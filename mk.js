const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"))
web3.eth.getTransactionReceipt('0x2b0ffe4aaf6e1d0920726d19ee3c3fbf732d0b82afc225699eba56b653d7d28f')
.then(console.log)