

const fs = require('fs')

setImmediate(()=>console.log("setImmediate"))

setTimeout(()=>console.log("Timer expired"),0)

Promise.resolve("Promise").then((res)=>console.log(res))

fs.readFile("./loveletter.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd timer"),0)

    process.nextTick(()=>console.log("2nd nextTick"));

    setImmediate(()=>console.log(" 2nd setImmediate"));

    console.log("File Reading CB")
})

process.nextTick(()=>console.log('nextTick'))

console.log('Last line of the file.')



// * Output

// Last line of the file.
// nextTick
// Promise
// Timer expired
// setImmediate
// File Reading CB
// 2nd nextTick
// 2nd setImmediate  // * here is the trick question when the callstack and call back queue is empty event loop wait in poll the mean the next iterantion it's start from check phase but before reached out the check phase it would check process.nextTick and promise callback so pool phase will run the next iteration
// 2nd timer