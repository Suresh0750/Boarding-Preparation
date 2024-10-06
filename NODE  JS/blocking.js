
const crypto = require("node:crypto")

console.log("hello world")

var a = 1078698
var b = 20986

// * key generated function
crypto.pbkdf2Sync("password","salt",500000,50,"sha512") // * it's syncronous and it will go to libuv and it will stop the main thread. once this code execute after that code will run.
console.log(`synchronous code runing successfully and its block the main thread`)

// * pbkdf2 = Password Base key Deravtive Function
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{  // * it's async and it will go libuv
    console.log('key is generated')
    console.log(key)
    console.log((key).toString())
})


function multiply(a,b){
    const result = a*b
    return result
}


var c = multiply(5,7)

console.log("Multiplication result is : ",c)
console.log((72).toString())