import { caesarCipher } from './index'

// setup test cases for repeatablity
// [input, shift, expected]
const testCases = {
  badInput: [12345, 10],
  badShift: ['test', 'shift'],
  right: ['test', 14, 'hsgh'],
  left: ['test', -14, 'fqef'],
  upper: ['TEST', 4],
  onlyLetters: ['1234567890!@#$%^&*().,+=-_', 4],
  large: ['test', 100, 'paop'],
  noShift: ['test', 0],
  long: ['The quick, brown fox jumps over the lazy dog 55 times.', 12]
}

describe('caesar cypher', () => {
  it('should return undefined if input is not a string', () => {
    const [input, shift] = testCases.badInput
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBeUndefined()
  })

  it('should return undefined if shift is not an integer', () => {
    const [input, shift] = testCases.badShift
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBeUndefined()
  })

  it('should encrypt a string given a right shift', () => {
    const [input, shift, expected] = testCases.right
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(expected)
  })

  it('should encrypt a string given a left shift', () => {
    const [input, shift, expected] = testCases.left
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(expected)
  })

  it('should preserve case of input string after encryption', () => {
    const [input, shift] = testCases.upper
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(encrypted.toUpperCase())
  })

  it('should not encrypt non-letters (e.g., punctuation, numbers, symbols', () => {
    const [input, shift] = testCases.onlyLetters
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(input)
  })

  it('should return the original string if there is no shift', () => {
    const [input, shift] = testCases.noShift
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(input)
  })

  it('should handle a very large shift', () => {
    const [input, shift, expected] = testCases.large
    const encrypted = caesarCipher(input, shift)

    expect(encrypted).toBe(expected)
  })

  it('should encrypt and decrypt a string given appropriate shift values', () => {
    const [input, shift] = testCases.long
    const encrypted = caesarCipher(input, shift)
    const decrypted = caesarCipher(encrypted, shift * -1) // reverse the shift

    expect(decrypted).toBe(input) // decrypted should be original input
  })
})
