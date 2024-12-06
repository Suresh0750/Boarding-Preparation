

/* 

    Pure Function

    pure function is return same output for same input and it always predictable and it does't have side affect.

    Impure function 

    impure function is alway return different output for same input. it may have side effect also.
 */



    function pure(a){
        return a+2
    }


    console.log(pure(2))
    console.log(pure(2))



    // * impure relay on external state
    let k = 2
    function impure(a,b){  
        return a+b+k++
    }

    console.log(impure(4,6))
    console.log(impure(4,6))  

    let s = 2

    function impure1(a,b){
        return a+b+s
    }

    console.log(impure1(3,3))  // * eventhough we got same output for same input this function is depending the external state.
    console.log(impure1(3,3))