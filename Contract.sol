// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

// 1. get raw binaries of the solidity compiler (solc)
// 2. use the javascript bindings (solc-js)

// solcjs --abi --base-path . Contract.sol

contract Token {
  uint16 public value = 65000; // 0
  uint8 public decimals = 18; // 2
  uint256 x = 10; // 1
}
