
/*
    Callback Hell
    Callback Hell refers to the situation where you have multiple nested callback functions in your code, making it hard to read, maintain, and debug. This happens when each callback function is passed as an argument inside another callback function, leading to deeply indented code that looks like a "pyramid" or "ladder."
*/

function grand(name,callback){
    console.log(name)
    callback()
}

function grandChild(callback){
    console.log('grand child')
    callback()
}

function child(){
    console.log('child')
}
    


grand('suresh',
    function(){
        grandChild(
            function(){
                child()
            }
        )
    }
)