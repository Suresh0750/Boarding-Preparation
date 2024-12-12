/* 

    call, apply, and bind?

    call: Immediately calls the function with a given this value and arguments provided individually.
    apply: Immediately calls the function with a given this value and arguments provided as an array.
    bind: Returns a new function with a specific this value and optionally pre-set arguments. It does not call the function immediately.

*/

let obj = {
    name : 'sasi'
}


function greet(stack){
    return `This person name if ${this.name} and stack ${stack}`
}

console.log(greet.call(obj,'MERN'))    

// * apply


const person = {
    name: "Suresh",
  };
  
  function greet1(greeting, punctuation) {
    console.log(greeting)
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  

  greet1.apply(person, ["Hi", "!!"]);


// * bind 


const understandBind = greet1.bind(person,'HI',"!!!")
understandBind()