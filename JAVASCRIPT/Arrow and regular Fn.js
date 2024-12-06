

/* 
    Arrow funcion .

    Arrow functions are a shorthand syntax for writing functions in JavaScript, introduced in ES6. They are concise and often used in situations where a lightweight function is needed.

    Regular function.
    Regular functions are the traditional way to define functions in JavaScript, with more explicit syntax.

*/


function check(){
    function inner(){
        console.log(this)
    }
    inner()
}

check()

let obj = {
    name : 'suresh',
    isAlive : function(){
        console.log(this)
    },
    isCheck: ()=>{
        console.log(this)
    }
}

obj.isAlive()
obj.isCheck()