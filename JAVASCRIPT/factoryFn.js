/* 
    Factory function

    factory function is a function is return a object. it is way of creating the multiple object with same properties and methods without using class.Factory functions are a good alternative to constructors, especially when you need more flexibility or when you don't want to use the new keyword.

    factory function explicitly create the object and we can create the private variable. we don't use the new keyword for creating the object and also we can use prototype for creating the method outside of the function.
*/


function factory(name,age,stack){
    return{
        name,
        age,
        stack
    }
}

factory.prototype.greet = ()=>{
    console.log(this)
}


const kiran = factory('kiran',22,'Flutter')
const Hari = factory('Hari',20,'MERN')
const liston = factory('liston',22,'MERN')
const Sasi = factory('Sasi',22,'MERN')



console.log(kiran)
console.log(Hari)
console.log(liston)
console.log(Sasi)
