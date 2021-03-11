const ALPHA_LEN = 26
const UPPER_START_CODE = 65
const LOWER_START_CODE = 97
const letters = /^[a-z]+$/i

/**
 * Helper to determine if input string is lowercase
 * @param {string} str The string to check
 * @returns {boolean} Whether the string is lowercase
 */
const isLowerCase = (str = '') => str === str.toLowerCase()

/**
 * Encrypt/decrypt a text string using Caesar Cipher
 * @param {string} input The text to encrypt/decrypt with cipher
 * @param {number} shift Number of places in alphabet to shift each character
 * @returns {string|undefined} Encrypted/decrypted string or undefined if args are invalid
 */
export const caesarCipher = (input = '', shift = 0) => {
  // ensure shift is a number
  if (isNaN(shift) || !Number.isInteger(shift)) {
    return
  }

  // ensure input is a string
  if (typeof input !== 'string') {
    return
  }

  let output = ''

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i]

    // only encrypt letters
    if (!letters.test(char)) {
      output += char
      continue
    }

    // preserve case by using the appropriate char code start index
    const start = isLowerCase(char) ? LOWER_START_CODE : UPPER_START_CODE

    // transform char to int between 0 and 25
    const code = input.charCodeAt(i) - start

    // get the new code by applying shift
    let num = (code + shift) % ALPHA_LEN

    // wrap back around if num is outside range 0 - 25
    if (num < 0) {
      num += ALPHA_LEN
    } else if (num > 25) {
      num -= ALPHA_LEN
    }

    // get encrypted/decrypted char by adding new code to start index
    output += String.fromCharCode(start + num)
  }

  return output
}
