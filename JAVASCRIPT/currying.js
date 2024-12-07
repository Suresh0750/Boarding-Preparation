/* 
    Curring 

    Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. In other words, instead of a function taking multiple arguments at once, it takes one argument and returns a new function that takes the next argument, and so on, until all arguments have been provided.

    Advantage :

    Create partial application.
    Reusability
    More redable code;
    Customizable function.
*/



function currying(a){
    return function(b){
        return a+b
    }
}


const val = currying(4)(5)

console.log(val)