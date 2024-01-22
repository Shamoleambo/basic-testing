import { transformToNumber } from './numbers'
import { it, expect } from 'vitest'

it('should return a number', () => {
  const result = transformToNumber('2')

  expect(result).toBeTypeOf('number')
})

it('should yield a NaN for non number transformations', () => {
  const input = 'not'
  const result = transformToNumber(input)

  expect(result).toBeNaN()
})
