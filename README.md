[![tetcoinjs](https://img.shields.io/badge/tetcoinjs-orange?style=flat-square)](https://js.tetcoin.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@tetcoin/wasm-crypto?logo=npm&style=flat-square)](https://www.npmjs.com/package/@tetcoin/wasm-crypto)
[![beta](https://img.shields.io/npm/v/@tetcoin/wasm-crypto/beta?label=beta&logo=npm&&style=flat-square)](https://www.npmjs.com/package/@tetcoin/wasm-crypto)
[![maintainability](https://img.shields.io/codeclimate/maintainability-percentage/tetcoinjs/wasm?logo=code-climate&style=flat-square)](https://codeclimate.com/github/tetcoin-js/wasm/maintainability)

# @tetcoin/wasm

Various WASM wrappers around Rust crates

## overview

It is split up into a number of internal packages, namely utilities -

- [wasm-crypto](packages/wasm-crypto/) Various hashing functions, sr25519 & ed25519 crypto

These are split from the `tetcoin-js/util` repo where it is heavily used as part of `@tetcoin/util-crypto`. (There JS fallbacks are available for some interfaces, e.g. hashing, but for sr25519 WASM is the only interface). Since these don't undergo massive changes on a daily basis and has a build overhead (WASM compilation & optimisation), it is better managed as a seperate repo with a specific CI configuration.

## development

Contributions are welcome!

To start off, this repo (along with others in the [@tetcoin](https://github.com/tetcoinjs/) family) uses yarn workspaces to organise the code. As such, after cloning, its dependencies _should_ be installed via `yarn`, not via npm; the latter will result in broken dependencies.
