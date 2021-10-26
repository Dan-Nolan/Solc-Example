const solc = require('solc');
const fs = require('fs');

const input = {
  language: 'Solidity',
  sources: {
    'Contract.sol': {
      content: fs.readFileSync("./Contract.sol").toString()
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output.contracts['Contract.sol'].Token.storageLayout);
