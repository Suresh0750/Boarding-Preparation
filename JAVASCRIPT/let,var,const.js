


/* 
        Var

        Introduced in ES3, var is the original way to declare variables in JavaScript.
        it has function scop or global scop but no block scop

        Let :

        Let is blocked and is preffered to declare mutable variables.
        we can re assign the value but not redeclare in same scope.
        while hoisting time store in tempary ted zone. if we try to access before the declaration we get referrence error.
    
        Const :

        




 */

function check(){
    var a = 10
    console.log(a)
}

// console.log(a) // * we can't access the out side the function which is present inside give reference error

check()

var b  = 7

{
    b = 30
    console.log(b)
}
 
console.log(b)    // * no block scop that means if we put variable inside the block scop also it's global scope


console.log("c",c)   // * hoisting initialize undefined 

var c = 5



// * Let

let n = 10

{
    console.log("n",n)
    
}
{
    let n = 40 
    console.log(n)   // * so this is another block scope. so we can re declare.
}

console.log(n)



// # CONST

{
    const newOne = 50
    console.log('newOne',newOne)
}

// console.log(newOne)  thorw the referenceError becasue variable declare in a block scope.


const obj = {name : 'hello'}

obj.name = 'kiran'

console.log(obj)