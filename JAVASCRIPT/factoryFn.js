/* 
    Factory function

    factory function is a function is return a object. it is way of creating the multiple object with same properties and methods without using class.Factory functions are a good alternative to constructors, especially when you need more flexibility or when you don't want to use the new keyword.
*/


function factory(name,age,stack){
    return{
        name,
        age,
        stack
    }
}


const kiran = factory('kiran',22,'Flutter')
const Hari = factory('Hari',20,'MERN')
const liston = factory('liston',22,'MERN')
const Sasi = factory('Sasi',22,'MERN')



console.log(kiran)
console.log(Hari)
console.log(liston)
console.log(Sasi)