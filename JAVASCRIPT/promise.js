/* 

    
    What is a Promise in JavaScript?
    A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a cleaner, more structured way compared to traditional callbacks.


    Promise chaining

    Promise Chaining in JavaScript allows you to execute a series of asynchronous operations in sequence, where the result of one operation is passed as input to the next. This is achieved by chaining .then() methods on a Promise.


*/

    
// Example


const cart = ['shoes',"pants","kurta"]





function createOrder(cart,callBack){

    new Promise((res,rej)=>{
        res(

        )
    })
 
}


function proceedToPayment(orderId){
    console.log(orderId)
}

createOrder(cart,function(id){proceedToPayment(id)})





const target = {
    message : 'akil',
    message: 'suresh'
}


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p1')
                reject(new Error('error is occur'))
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve
                reject(new Error('error is occur'))
    },3000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p3')
        reject(new Error('error is occur'))
    },2000)
})
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p4')
                // reject(new Error('error is occur'))
    },5000)
})

 Promise.any([p1,p2,p3,p4]).then((data)=>{
     console.log(data)
 }).catch((err)=>console.log(err))
