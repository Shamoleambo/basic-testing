import { validateStringNotEmpty, validateNumber } from './validation'
import { it, expect, describe } from 'vitest'

describe('validateStringNotEmpty', () => {
  it('should return nothing if value is valid', () => {
    const input = 'valid value'
    const result = validateStringNotEmpty(input)

    expect(result).toBeFalsy()
  })
})

describe('validateNumber', () => {
  it('should return nothing if value is valid', () => {
    const input = 1
    const result = validateNumber(input)

    expect(result).toBeFalsy()
  })
})
