/* 
 Callback function

 A callback function is a function passed as an argument to another function, to be executed later, after the completion of some task or operation. This is a fundamental concept in JavaScript and is often used to handle asynchronous operations like reading files, making HTTP requests, or handling events.

*/


function parent(name,callback){

        console.log(name)
        callback()
}

function child(){
    console.log('call the child function')
}


parent('Suresh',child)  