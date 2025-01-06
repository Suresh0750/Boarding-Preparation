




// * 


let arr=[122,132,141,463,199]


let i = 0
let j = arr.length-1

while(i<j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
    i++
    j--
}

console.log(arr)
i = 0
j = arr.length-1

while(i<j){
    if(i%2!==0&&j%2!==0){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }else if(i%2==0) i++
    else j--
}

console.log(arr)