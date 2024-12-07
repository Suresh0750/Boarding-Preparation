

/* 
    
*/
function constructorFun(name,age){
    this.name = name
    this.age = age
    this.greet = ()=>{
        console.log(`The person name ${this.name} person age ${this.age}`)
    }
}

constructorFun.prototype.student = function(){
    console.log(`${this.name}`)
}


let obj = new constructorFun('suresh',18)

console.log(obj)

obj.greet()
obj.student()