/* 
    Closer
    A closure in JavaScript is a function that remembers and accesses its lexical scope, even when the function is executed outside that scope. Simply put, a closure is a function that retains access to variables from its outer (enclosing) function even after the outer function has finished executing.

    why we use :
        user to create private variable. 
        user to create a dynamic function.
        
    draw backs of closer

    Memory consumption
    Complexity and Debugging
    performance consideration

*/



function outerFunction(){
    let k  = 30
    innerFunction()
    function innerFunction(){    // * this inner function is called closer
        console.log(k)
    }
}

outerFunction()


function k(){
    let privateVariable = 10  // * private variable

    return {
        decrement : function(){
            console.log(privateVariable)
        },
        reasign : function(){
            privateVariable = 20
        }
    }

}

k().decrement()  // * closer are used to crete private variable
k().reasign()
k().decrement()





