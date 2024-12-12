

const dns = require('dns')

// console.log(dns)


dns.lookup('profinders.online',(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('ok domain name is correct')
        console.log(data)
    }

})

dns.lookup('web.whatsapp.com',(err,data)=>{
    if(err){
        console.log(err?.message)
    }
    console.log(data)
})