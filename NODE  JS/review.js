// * create server in node js


// const http = require('http')
// const url = require('url')


// const server = http.createServer((req,res)=>{
//     console.log('hello world')
//     console.log(req.method)
//     console.log(req.url)
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('I am suresh\n')
//     if(req.url==='/'){
//         res.end('hello world')
//     }else{
//         console.log(req.url)
//         const parseUrl = url.parse(req.url,true)
//         const query = parseUrl.query
//         console.log(JSON.parse(query))
//         res.end('use query')
//     }
// })


// server.listen(3000,()=>{
//     console.log('server running on http://localhost:3000')
// })



// * express server

    // const express = require('express')
    // const app = express()
    // app.use(express.json())
    // app.use('/:id',(req,res)=>{
    //     console.log(req.params)
    //     const {id} = req.params
    //     console.log(req.query)
        
    //     // const oddNum = JSON.parse(id).filter((val)=> val%2!=0)
    //     const oddNum = Number(id)+Number(req.query.name)

    //     console.log(oddNum)
    //     return res.status(200).send(String(oddNum))
    // })

    // app.listen(3001,()=>{
    //     console.log('http://localhost:3001')
    // })


// const fs = require('fs')

// fs.writeFile('read.txt','hello world',(err)=>{
//     if(err){
//         console.log(err.message)
//     }
// })


// fs.readFile('read.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(data)
//     }
// })


// let i = 0

// let id = setInterval(()=>{
//     fs.appendFile('read.txt',`${++i}\n`,(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     if(i==10){
//         clearInterval(id)
//     }
// },1000)


// const readbleStream = fs.createReadStream('file.txt')
// const writebleStream = fs.createWriteStream('read.txt')

// readbleStream.pipe(writebleStream)

// readbleStream.on('end',()=>{
//     console.log('end the stream')
// })

// const EventEmiter = require('events')


// const eventEmiter = new EventEmiter()

// eventEmiter.on('greet',(data)=>{
//     console.log('listen the data')
//     console.log(data)
// })


// eventEmiter.emit('greet','hello world')


const Cluster = require('cluster')

const {fork} = Cluster;

fork()