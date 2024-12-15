
const fs = require('fs')

const https = require('https')



https.get('https://dummyapi.online/api/movies',(res)=>{
   console.log(`API successfully fetched the data`)
})


setTimeout(()=>{
    console.log('Timer')
},5000)


fs.readFile("./private.js","utf8",(err,data)=>{  // * asyn and it offloads to libuv
    if(data){
        console.log(data)
    }
})

function multiply(a,b){
    console.log(a*b)
}
multiply(4,5)
console.log('world')


fs.stat('./Images',(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})