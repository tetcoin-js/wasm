// Copyright 2019-2021 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@tetcoin/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@tetcoin/wasm-crypto-asmjs(.*)$': '<rootDir>/packages/wasm-crypto-asmjs/build/$1',
    '@tetcoin/wasm-crypto-wasm(.*)$': '<rootDir>/packages/wasm-crypto-wasm/build/$1',
    // eslint-disable-next-line sort-keys
    '@tetcoin/wasm-crypto(.*)$': '<rootDir>/packages/wasm-crypto/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/wasm-crypto-asmjs/build',
    '<rootDir>/packages/wasm-crypto-wasm/build',
    '<rootDir>/packages/wasm-crypto/build'
  ],
  resolver: '@tetcoin/dev/config/jest-resolver.cjs'
});
