// Challenge 1

function capitalize(str) {
    if (str.isEmpty()) {
        return str
    }
    return str[0].toUpperCase() + str.slice(1)
}

String.prototype.capitalize = function () {
    return capitalize(this)
}

// Challenge 2

function allCaps(str) {
    return str.toUpperCase()
}

String.prototype.allCaps = function () {
    return allCaps(this)
}

// Challenge 3

function capitalizeWords(str) {
    const splitStr = str.split(' ')
    let capStr = []
    for (let i = 0; i < splitStr.length; i++) {
        capStr.push(splitStr[i].capitalize())
    }
    return capStr.join(' ')
}

String.prototype.capitalizeWords = function () {
    return capitalizeWords(this)
}

// Challenge 3 - Bonus


function capitalizeHeadline(str) {
    const splitStr = str.split(' ')
    let capStr = []
    const exceptionList = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from']
    splitStr.forEach((word, index) => {
        if (index >=1 && exceptionList.includes(word)) {
            capStr.push(word)
        }
        else {
            capStr.push(word.capitalize())
        }
    })
    return capStr.join(' ')
}

String.prototype.capitalizeHeadline = function () {
    return capitalizeHeadline(this)
}

// Challenge 4

function removeExtraSpaces(str) {
    return str.trim().split(' ').filter(item => item !== '').join(' ')
}

String.prototype.removeExtraSpaces = function () {
    return removeExtraSpaces(this)
}

// Challenge 5

function kebabCase(str, sep) {
    return str.toLowerCase().replace(/[^a-zA-Z 0-9]/g, "").removeExtraSpaces().split(' ').join(sep)
}

String.prototype.kebabCase = function (sep) {
    return kebabCase(this, sep)
}

// Challenge 6

function snakeCase(str) {
    return str.kebabCase('_')
}

String.prototype.snakeCase = function () {
    return snakeCase(this)
}

// Challenge 7

function camelCase(str) {
    const splitStr = str.toLowerCase().replace(/[^a-zA-Z 0-9]/g, "").removeExtraSpaces().split(' ')
    let camelStr = []
    splitStr.forEach((word, index) => {
        if (index >= 1) {
            camelStr.push(word.capitalize())
        }
        else {
            camelStr.push(word)
        }
    })
    return camelStr.join('')
}

String.prototype.camelCase = function () {
    return camelCase(this)
}

// Challenge 8

function shift(str, amt) {
    return str.slice(amt) + str.slice(0, amt)
}

String.prototype.shift = function (amt) {
    return shift(this, amt)
}

// Challenge 9

function makeHashTag(str) {
    let hashLength = 3
    const list = str.toLowerCase().replace(/[^a-zA-Z 0-9]/g, "").removeExtraSpaces().split(' ')
    list.sort(function (a, b) { return b.length - a.length })
    if (hashLength > list.length) {
        hashLength = list.length
    }
    if (str.isEmpty() === false) {
        for (let i = 0; i < hashLength; i += 1) {
            list[i] = '#' + list[i]
        }
        return list.slice(0, hashLength)
    }
    return str
}

String.prototype.makeHashTag = function () {
    return makeHashTag(this)
}

// Challenge 10

function isEmpty(str) {
    str.trim()
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] !== ' ') {
            return false
        }
    }
    return true
}

String.prototype.isEmpty = function () {
    return isEmpty(this)
}

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.capitalizeHeadline = capitalizeHeadline
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebabCase = kebabCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty