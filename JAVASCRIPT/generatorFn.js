

/*
        Generator Function

A generator function is a special kind of function in JavaScript that allows you to pause its execution and resume it later. It is defined using the function* syntax and utilizes the yield keyword to return a value, pausing the function’s execution until the next call.
*/



function* generator(b){
    let a = 1
    while(true){
        yield b+(a++)
    }
}

const gen = generator(5)  // * here we get iterator

console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next()) 