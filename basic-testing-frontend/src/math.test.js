import { it, expect } from 'vitest'
import { add } from './math.js'

it('should summarize all number values in an array', () => {
  const numbers = [1, 2, 3]
  const result = add(numbers)
  expect(result).toBe(6)
})

it('should yield NaN if at least one invalid number is provided', () => {
  const addArgs = [1, 'string']
  const result = add(addArgs)
  expect(result).toBeNaN()
})

it('should yield the correct answer from a numeric string array', () => {
  const addArgs = ['1', '2']
  const result = add(addArgs)
  expect(result).toBe(3)
})

it('should return 0 if the array is empty', () => {
  const addArgs = []
  const result = add(addArgs)
  expect(result).toBe(0)
})

it('should throw an error if no values are provided to the function', () => {
  const resultFn = () => {
    add()
  }

  expect(resultFn).toThrow()
})

it('should throw an error if add is provided with more than one argument that are not a single array', () => {
  const num1 = 1
  const num2 = 2
  const resultFn = () => {
    add(num1, num2)
  }

  expect(resultFn).toThrow()
})
