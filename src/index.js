// Challenge 1

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1)
}

// Challenge 2

String.prototype.allCaps = function () {
    return this.toUpperCase()
}