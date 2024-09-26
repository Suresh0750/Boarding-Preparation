

// * if you use require we can't access the variable, function 

// * if I want to access other page variable fucntion I want to export then only I can use.

const calculateFunction = require('./sum.js')
require('./private.js')

var a = 10
var b = 8
calculateFunction(1,5)
console.log(a+b)

// console.log(x,y) // * without export and import that file we can't access the variable and function


k = 10

console.log(k)
