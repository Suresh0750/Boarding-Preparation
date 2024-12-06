/* 
  
   A Higher-Order Function (HOF) is a function that either:

    Takes one or more functions as arguments, or
    Returns a function as a result.
    HOFs allow you to pass functions around and even return new functions based on the input provided.
*/


function greet(name,callback){
    console.log(name)
    callback()
}


function child(){
    console.log('child')
}

greet('kiran',child)