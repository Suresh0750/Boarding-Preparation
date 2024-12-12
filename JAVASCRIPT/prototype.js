/* 
    Prototype :

    Prototype is like a blueprint for objects in JavaScript.
    Every object in JavaScript has a prototype. It's a place where we can define properties or methods that all instances (objects) created from a particular constructor function will share.
    The prototype is an object that contains methods and properties that should be shared by all instances of the function's constructor.


    Prototype inheritance

    In JavaScript, prototypal inheritance is a mechanism where objects can inherit properties and methods from other objects. Instead of using classes (like in many other programming languages), JavaScript objects can directly inherit from other objects. 
    This is done through the prototype chain.

    Prototype Pollution

    Prototype Pollution refers to the manipulation or modification of an object's prototype chain, which can lead to unwanted and potentially harmful changes to an object's behavior.

    How this occures :
    Prototype pollution typically occurs when data is directly assigned to the prototype, often through untrusted or user-supplied input, such as when receiving data from an API or form.

*/

/* 
    Scop

    In JavaScript, scope refers to the area or context in your code where a variable or function can be accessed, defined, or modified.


*/


let obj = {
    name :'suresh'
}

Object.prototype.greet=()=>{
    console.log('wellcome all')
}


let obj1 = {
    name :'suresh'
}


let obj2 = {
    name :'suresh'
}

// obj.greet()
// obj1.greet()
// obj2.greet()


function age2() {
    console.log(this.age)
}

Function.prototype.age = 10;
// age2();


    let newObj = {
        name : 'kiran',
        age : 22
    }

    let new2Obj = Object.create(newObj)
    new2Obj.name = 'suresh'
    new2Obj.friend = true
    console.log(newObj.friend)
