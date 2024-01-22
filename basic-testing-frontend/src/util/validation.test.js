import { validateStringNotEmpty } from './validation'
import { it, expect } from 'vitest'

it('should return nothing if value is valid', () => {
  const input = 'valid value'
  const result = validateStringNotEmpty(input)

  expect(result).toBeFalsy()
})
