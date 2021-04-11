const lt = require('../src/index')

test('Test capitalize', () => {
    expect(fb.isFizzy('hello world')).toBe('Hello world')
})

test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
})

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(1)).toBe('')
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('Test fizzBuzz', () => {
    expect(fb.fizzBuzz(1)).toStrictEqual({ buzz: 0, count: 1, fizz: 0, fizzBuzz: 0 })
    expect(fb.fizzBuzz(3)).toStrictEqual({ buzz: 0, count: 3, fizz: 1, fizzBuzz: 0 })
    expect(fb.fizzBuzz(5)).toStrictEqual({ buzz: 1, count: 5, fizz: 1, fizzBuzz: 0 })
    expect(fb.fizzBuzz(15)).toStrictEqual({ buzz: 2, count: 15, fizz: 4, fizzBuzz: 1 })
})

test('Sanity check', () => {
    expect(2+2).toBe(4)
})
