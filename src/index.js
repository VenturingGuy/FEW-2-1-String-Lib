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
            capStr.push(splitStr[i].upperFirst())
        }
    }
    return capStr.join(' ')
}