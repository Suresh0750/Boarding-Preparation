const fs = require('fs')


const crypto = require('crypto')

 process.env.UV_THREADPOOL_SIZE = 8  // * it's used to change the Threadpool size defaltly it used 4 thread pool
//  console.log(process.env.UV_THREADPOOL_SIZE)

crypto.pbkdf2('password','salt',500000,50,'sha512',(err,data)=>{
    console.log(`1-crypdoPBKDF2 done`)
})

crypto.pbkdf2('password','salt',500000,50,'sha512',(err,data)=>{
    console.log(`2-crypdoPBKDF2 done`)
})

crypto.pbkdf2('password','salt',500000,50,'sha512',(err,data)=>{
    console.log(`3-crypdoPBKDF2 done`)
})

crypto.pbkdf2('password','salt',500000,50,'sha512',(err,data)=>{
    console.log(`4-crypdoPBKDF2 done`)
})


crypto.pbkdf2('password','salt',500000,50,'sha512',(err,data)=>{
    console.log(`5-crypdoPBKDF2 done`)
})


