// Challenge 1

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1)
}

// Challenge 2

String.prototype.allCaps = function () {
    return this.toUpperCase()
}

// Challenge 3

String.prototype.capitalizeWords = function () {
    splitStr = this.split(' ')
    capStr = []
    for (let i = 0; i < splitStr.length; i++) {
        capStr.push(splitStr[i].upperFirst())
    }
    return capStr.join(' ')
}

// Challenge 3 - Bonus

String.prototype.capitalizeHeadline = function () {
    splitStr = this.split(' ')
    capStr = []
    exceptionList = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from']
    for (let i = 0; i < splitStr.length; i++) {
        if (i >= 1 && exceptionList.includes(splitStr[i])) {
            capStr.push(splitStr[i])
        }
        else {
            capStr.push(splitStr[i].capitalize())
        }
    }
    return capStr.join(' ')
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