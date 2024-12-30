// Create an Express route that accepts two numbers as query parameters and displays their sum on a web page


const express = require('express')


const app = express()

app.get('/',(req,res)=>{

    try {
        const query = req.query
        console.log(query)
        const data = Number(query.numOne)+Number(query.numTwo)
        res.send(JSON.stringify(data))
    } catch (error) {
        console.log(error?.message)
    }

})



app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})

