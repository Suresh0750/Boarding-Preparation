 
/* 
        Shallow Copy
         Copies only the top-level properties, and nested objects/arrays are referenced.
        Deep Copy 
         Creates an independent copy of the entire object, including nested objects, ensuring no shared references between the original and copied objects.
*/

 const original = {
    name : 'suresh',
    age : 22,
    greet : ()=>{
        console.log(`His name ${this.name}`)
    }
 }


const copy = original

 console.log(original)
 copy.depart = 'mechanical'

 console.log(original.depart)  /// * shallow copy



 // * deep copy


 const original1 = {
    name : 'kiran',
    age : 22,
    greet : ()=>{
        console.log(`His name ${this.name}`)
    }
 }


 const copy1 = JSON.parse(JSON.stringify(original1))

 copy1.depart = 'flutter'
 console.log(original1.depart)  // * undefined