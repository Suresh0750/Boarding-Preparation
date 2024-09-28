

// * if you use require we can't access the variable, function 

// * if I want to access other page variable fucntion I want to export then only I can use.
const {
    multiplyNumber,
    addNum
} = require('./calculate/index')

var a = 10
var b = 8

addNum(2,5)
multiplyNumber(2,5)
console.log(a+b)


// console.log(x,y) // * without export and import that file we can't access the variable and function


k = 10   

console.log(k)

console.log(globalThis)
