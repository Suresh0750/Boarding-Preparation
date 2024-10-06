


console.log("hello world")

var a = 104333234
var b = 4325452355

setTimeout(()=>{      
    console.log("call me right now ASAP") // * AS SOON AS POSSIBLE 
},0)

setTimeout(()=>{
    console.log("call me after 3 seconds")
},3000)

function multiplyFn(x,y){
    const result = a*b;
    return result 
}

var c = multiplyFn(6,7)
console.log("Multiplication result is : ",c)



// * order of execution 

// hello world
// Multiplication result is :  451288432710066050
// call me after 3 seconds