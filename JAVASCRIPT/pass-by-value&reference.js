/* 

    PASSED-BY-VALUE AND PASSED BY-REFERENCE

    pass-by-value and pass-by-reference describe how arguments are passed to functions.
    Understanding how these work is crucial because JavaScript behaves differently depending on the data type (primitive or object).

*/


// * passed by value

let x = 10
function passedByValue(x){
    x = 15
    console.log(x)
}
passedByValue(x)

console.log(x)



// * passed by reference.


function passedByReference(obj){
    obj.isPass = true
    console.log(obj)
}

let obj = {
    name : 'suresh',
    age : 25
}
obj.city = 'coi'

passedByReference(obj)

console.log(obj);

