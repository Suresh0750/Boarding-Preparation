/* 
    What is Optional Chaining?
    Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties or methods of an object without throwing an error if the property is null or undefined.
*/


let obj = {
    name : 'suresh'
}


console.log(obj.name?.age?.dfs)