/* 

    
What is a Promise in JavaScript?
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a cleaner, more structured way compared to traditional callbacks.



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

