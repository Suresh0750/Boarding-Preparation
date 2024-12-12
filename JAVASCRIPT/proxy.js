/* 
    Proxy Object :

    proxy object is used to customize the object.

    proxy traps
    
    In JavaScript, Proxy traps are special methods that allow you to intercept and customize operations performed on objects when using the Proxy object.

    The Proxy object enables you to define custom behavior for fundamental operations such as property access, assignment, deletion, and function invocation.

*/
const target = { name: "Suresh" };

const handler = {
  get(target, property) {
    return property in target ? target[property] : "Property not found!";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // "Suresh"
console.log(proxy.age);  // "Property not found!"


// * weak ref


class Example {
    constructor(value) {
        this.value = value;
    }
}

let obj = new Example("Suresh");

// Creating a weak reference to the object
const weakRef = new WeakRef(obj);

console.log(weakRef.deref()); // Output: Example { value: 'Suresh' }

// Removing the strong reference
obj = null;

// Garbage collection happens at some point, weakRef allows the object to be cleared
setTimeout(() => {
    console.log(weakRef.deref()); // Output: undefined (if garbage collected)
}, 1000);
