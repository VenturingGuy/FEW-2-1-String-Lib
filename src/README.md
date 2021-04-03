Author: Luis Ventura
This is a developmental library for Strings in javascript.

To install,
  1. Open the terminal.
  2. Navigate to the project directory.
  3. Run 'npm i luis-vent-stringlib' (no quotations) in the command line.

Sample Code:
```
String.prototype.upperFirst = function() {
  return this[0].toUpperCase() + this.slice(1)
}
```
This function serves to capitalize the first letter in a string.

To use:
```
console.log([yourStringHere].upperFirst())
```
