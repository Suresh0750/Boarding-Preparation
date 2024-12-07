/*
        In JavaScript, map, reduce, and filter are higher-order array methods that allow you to perform functional operations on arrays. 

*/


let array = [1,2,3,4,5,6,7,8,9,10]

const newArray = array.map((currentValue, index, array)=>{
        return currentValue+index
});

// console.log(newArray)

const filEven = array.filter((val)=> val%2==0)

console.log(filEven)


const newReduce = array.reduce((acc,curr,index,arr)=>{
        if(curr%2==0){
           return acc+=curr
        }
        return acc
},0)


console.log(newReduce)