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