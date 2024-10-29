


const http = require('node:http')

const server = http.createServer(function(req,res){
    console.log(req.url)
    if(req.url==='/secret'){
        res.end('There is no secret data')
    }
    res.end('hello')
})


server.listen(7777)