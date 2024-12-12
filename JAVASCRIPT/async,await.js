/* 

    Async ,Await

    async and await are features in JavaScript that make working with asynchronous code easier to read and write. 
    They allow you to handle Promises in a cleaner and more synchronous-looking way.

*/


// * promise


function fetchData(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        // resolve('successfully fetch the data')
        reject(new Error('due to some problem'))
       },500)
    })
}


fetchData().then((data)=>console.log(data)).catch((err)=>console.log('someError is occur')).finally(()=>console.log('promise has been completed'))