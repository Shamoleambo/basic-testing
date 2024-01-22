import { transformToNumber } from './numbers'
import { it, expect } from 'vitest'

it('should return a number', () => {
  const result = transformToNumber('2')

  expect(typeof result).toBe('number')
})
