/* 
    Spread Operator
    The spread operator is used to "spread" the elements of an array or properties of an object into individual values.

    Rest Operator :
    The rest operator collects multiple values into a single array. It is primarily used in function parameters and destructuring.

*/


// * spread operator
let arr = [1,2,3,4,5]

let arr1 = [6,7,8,9,10]


let arr2 = [...arr,...arr1]

console.log(arr2)


// *Rest Operator


function rest(...arr){
    
    console.log(arr)
}


rest(1,2,3,4,5,6,7,8)