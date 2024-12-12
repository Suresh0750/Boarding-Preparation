/* 

    Shadowing :

        use the same variable name in different scope is called shadowing.
    
    Illegal shadowing 

        Redeclare the same variable in same scope.  

*/



let x = 10


if(true){
    let x = 15
    console.log(x)
}

console.log(x)

let kiran = 'fluter'
// let kiran = 'fluter'