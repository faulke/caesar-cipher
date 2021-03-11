# caesar-cipher
A Javascript implementation of [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## Install
```bash
$ npm install
```

## Usage
```javascript
import { caesarCipher } from './index'

const encrypted = caesarCipher('text to encrypt', 12)
console.log(encrypted)
// output: 'fqjf fa qzodkbf'

const decrypted = caesarCipher(encrypted, -12)
console.log(decrypted)
// output: 'text to encrypt'
```

## Test
```bash
$ npm run test
```