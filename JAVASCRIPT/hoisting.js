/* 
    HOISTING

    Hoisting is a mechanism , before execution of the time every variable placed in top of their scope is called hoisting. variable of the var hoisted top of the scope and 
    if we accesss before declaration we can get undefined it will assign the value when it running.

    let and const we can't access while hoisting let is declare in temparal ted zone.
    
*/


console.log(a)  // * undefined
var a = 10


// console.log(k) // * referrence error
let k = 11

// console.log(z) // * referrence error
const z = 10


hois()   // * while call the function, funcion hoisting would happens.

function hois(){
    console.log(a)
    console.log(k)
}

// newHois()     // * we can't call because while hoisting this is a variable.

let newHois = function (){
    console.log(a)
    console.log(k)
}