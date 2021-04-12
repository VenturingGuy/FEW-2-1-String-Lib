const lt = require('../src/index.js')

test('Test capitalize', () => {
    expect(lt.capitalize('helloworld')).toBe('Helloworld')
    expect(lt.capitalize('Hello world')).toBe('Hello world')
    expect(lt.capitalize('')).toBe('')
    expect(lt.capitalize('this is not how things were supposed to turn out')).toBe('This is not how things were supposed to turn out')
})

test('Test allCaps', () => {
    expect(lt.allCaps('hello')).toBe('HELLO')
    expect(lt.allCaps('WORLD')).toBe('WORLD')
    expect(lt.allCaps('')).toBe('')
    expect(lt.allCaps('What!')).toBe('WHAT!')
})

test('Test capitalizeWords', () => {
    expect(lt.capitalizeWords('hello')).toBe('Hello')
    expect(lt.capitalizeWords('WORLD')).toBe('WORLD')
    expect(lt.capitalizeWords('')).toBe('')
    expect(lt.capitalizeWords('foo bar')).toBe('Foo Bar')
})

test('Test capitalizeHeadline', () => {
    expect(lt.capitalizeHeadline('hello')).toBe('Hello')
    expect(lt.capitalizeHeadline('WORLD')).toBe('WORLD')
    expect(lt.capitalizeHeadline('')).toBe('')
    expect(lt.capitalizeHeadline('foo bar')).toBe('Foo Bar')
    expect(lt.capitalizeHeadline('the foo bar')).toBe('The Foo Bar')
    expect(lt.capitalizeHeadline('foo the bar')).toBe('Foo the Bar')
})

test('Test removeExtraSpaces', () => {
    expect(lt.removeExtraSpaces('hello')).toBe('hello')
    expect(lt.removeExtraSpaces('WORLD')).toBe('WORLD')
    expect(lt.removeExtraSpaces('')).toBe('')
    expect(lt.removeExtraSpaces('foo bar')).toBe('foo bar')
    expect(lt.removeExtraSpaces('the  foo bar')).toBe('the foo bar')
    expect(lt.removeExtraSpaces(' foo   the    bar')).toBe('foo the bar')
    expect(lt.removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!')
})

test('Test kebabCase', () => {
    expect(lt.kebabCase('hello', '-')).toBe('hello')
    expect(lt.kebabCase('WORLD', '-')).toBe('world')
    expect(lt.kebabCase('', '-')).toBe('')
    expect(lt.kebabCase('foo bar', '-')).toBe('foo-bar')
    expect(lt.kebabCase('the  foo bar', '-')).toBe('the-foo-bar')
    expect(lt.kebabCase(' foo   the    bar', '-')).toBe('foo-the-bar')
    expect(lt.kebabCase('   Hello    world!   ', '-')).toBe('hello-world')
})

test('Test snakeCase', () => {
    expect(lt.snakeCase('hello')).toBe('hello')
    expect(lt.snakeCase('WORLD')).toBe('world')
    expect(lt.snakeCase('')).toBe('')
    expect(lt.snakeCase('foo bar')).toBe('foo_bar')
    expect(lt.snakeCase('the  foo bar')).toBe('the_foo_bar')
    expect(lt.snakeCase(' foo   the    bar')).toBe('foo_the_bar')
    expect(lt.snakeCase('   Hello    world!   ')).toBe('hello_world')
})

test('Test camelCase', () => {
    expect(lt.camelCase('hello')).toBe('hello')
    expect(lt.camelCase('WORLD')).toBe('world')
    expect(lt.camelCase('')).toBe('')
    expect(lt.camelCase('foo bar')).toBe('fooBar')
    expect(lt.camelCase('the  foo bar')).toBe('theFooBar')
    expect(lt.camelCase(' foo   the    bar')).toBe('fooTheBar')
    expect(lt.camelCase('   Hello    world!   ')).toBe('helloWorld')
})

test('Test shift', () => {
    expect(lt.shift('hello', 3)).toBe('lohel')
    expect(lt.shift('WORLD', 2)).toBe('RLDWO')
    expect(lt.shift('', 5)).toBe('')
    expect(lt.shift('foo bar', 3)).toBe(' barfoo')
    expect(lt.shift('the  foo bar', 6)).toBe('oo barthe  f')
    expect(lt.shift(' foo   the    bar', 8)).toBe('he    bar foo   t')
    expect(lt.shift('   Hello    world!   ', 5)).toBe('llo    world!      He')
})

test('Test makeHashTag', () => {
    expect(lt.makeHashTag('hello')).toStrictEqual(['#hello'])
    expect(lt.makeHashTag('WORLD')).toStrictEqual(['#world'])
    expect(lt.makeHashTag('')).toBe('')
    expect(lt.makeHashTag('foo bar')).toStrictEqual(['#foo', '#bar'])
    expect(lt.makeHashTag('the  foo bar')).toStrictEqual(['#the', '#foo', '#bar'])
    expect(lt.makeHashTag(' foo   the    bar')).toStrictEqual(['#foo', '#the', '#bar'])
    expect(lt.makeHashTag('   Hello    world!   ')).toStrictEqual(['#hello', '#world'])
})

test('Test isEmpty', () => {
    expect(lt.isEmpty('hello')).toBe(false)
    expect(lt.isEmpty('WORLD')).toBe(false)
    expect(lt.isEmpty('')).toBe(true)
    expect(lt.isEmpty('foo bar')).toBe(false)
    expect(lt.isEmpty('the  foo bar')).toBe(false)
    expect(lt.isEmpty(' foo   the    bar')).toBe(false)
    expect(lt.isEmpty('   Hello    world!   ')).toBe(false)
    expect(lt.isEmpty(`   \
    \
            `)).toBe(true)
})

