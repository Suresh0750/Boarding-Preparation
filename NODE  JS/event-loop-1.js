const fs = require('fs')

const a = 100;

setImmediate(()=>console.log("setImmediate"));
let text ;
fs.readFile("./newFile.txt","utf8",(err,data)=>{
    console.log("Fs Reading CB")
    
})


fs.writeFile("./loveletter.txt","hi I love node js",(err)=>{
   
})

setTimeout(()=>console.log('Time expired'),0)

function printA(){
    console.log("a=",a)
}

printA()

console.log("last line of the file.")



// * output

//  a= 100
// last line of the file.
// Time expired
// setImmediate
// Fs Reading CB