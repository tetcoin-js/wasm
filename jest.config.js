/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('@tetcoin/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@tetcoin/wasm-(schnorrkel)(.*)$': '<rootDir>/packages/wasm-$1/src/$2'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/wasm-schnorrkel/build'
  ],
  resolver: './jest.resolver.js'
});
