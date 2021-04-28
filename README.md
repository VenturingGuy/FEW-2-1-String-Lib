![npm bundle size](https://img.shields.io/bundlephobia/min/luis-vent-stringlib)

[![Coverage Status](https://coveralls.io/repos/github/VenturingGuy/FEW-2-1-String-Lib/badge.svg?branch=master)](https://coveralls.io/github/VenturingGuy/FEW-2-1-String-Lib?branch=master)

Author: Luis Ventura

This is a developmental library for Strings in javascript.

To install,
  1. Open the terminal.
  2. Navigate to the project directory.
  3. Run 'npm i luis-vent-stringlib' (no quotations) in the command line.

Sample Code:
```
String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}
```
This function serves to capitalize the first letter in a string.

To use:
```
console.log([yourStringHere].capitalize())
```

npm page: https://www.npmjs.com/package/luis-vent-stringlib
