

// Practical: Remove the adjacent odd values in an array ? eg: input: 
// [1,2,3,4,5,6,7,3,5,8,9,10] output:  [1,2,3,4,5,6,8,9,10]

let arr = [1,2,3,4,5,6,7,3,5,8,9,10,1,1]
let i = 0
let start = null
while(i<arr.length){
    if(arr[i]%2!=0&&arr[i+1]%2!=0){
        start = i
    }else if(start>=0 && arr[i]%2==0){
        arr.splice(start-1,i-start)
        start = null
    }
    i++
}

if(start){
    arr.splice(start-1,i-start+1)
}
console.log(arr)