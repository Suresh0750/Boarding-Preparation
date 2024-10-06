

const fs = require("fs")


setImmediate(()=>console.log("setImmediate"))


setTimeout(()=>console.log("Timer expired"),0)

Promise.resolve("Promise").then((res)=>console.log(res))

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB")
})

process.nextTick(()=>{
    process.nextTick(()=>console.log('inner nextTick'))
    console.log('nextTick')
})

console.log("Last line of the file.")


// * here is the trick question which when the priority queue is empty only the event loop will move if process.nextTick inside again process.nextTick is there means that code will executed.

// * output

// Last line of the file.
// nextTick
// inner nextTick
// Promise
// Timer expired
// setImmediate
// "File Reading CB  // * if the file is larage it would take some time