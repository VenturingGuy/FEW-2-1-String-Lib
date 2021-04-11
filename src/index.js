// Challenge 1

function capitalize(str) {
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

String.prototype.removeExtraSpaces = function () {
    return this.trim().split(' ').filter(item => item != '').join(' ')
}

// Challenge 5

String.prototype.kebabCase = function (sep) {
    return this.toLowerCase().replace(/[^a-zA-Z 0-9]/g, "").removeExtraSpaces().split(' ').join(sep)
}

// Challenge 6

String.prototype.snakeCase = function () {
    return this.kebabCase('_')
}

// Challenge 7
String.prototype.camelCase = function () {
    splitStr = this.toLowerCase().split(' ')
    camelStr = [splitStr[0]]
    for (let i = 1; i < splitStr.length; i++) {
        camelStr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1))
    }
    return camelStr.join('')
}

// Challenge 8

String.prototype.shift = function (amt) {
    return this.slice(amt) + this.slice(0, amt)
}

// Challenge 9

String.prototype.makeHashTag = function () {
    let hashLength = 3
    list = this.split(' ')
    list.sort(function (a, b) { return b.length - a.length })
    if (hashLength > list.length) {
        hashLength = list.length
    }
    for (let i = 0; i < hashLength; i++) {
        list[i] = '#' + list[i].toLowerCase()
    }
    return list.slice(0, hashLength)
}

// Challenge 10
String.prototype.isEmpty = function () {
    this.trim()
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== ' ') {
            return false
        }
    }
    return true
}