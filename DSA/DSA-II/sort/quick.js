


let arr = [1,2,3,-3,-3,8,-5,-2,100]


//  * 06 | 12 | 24

// * with extra space
function quickSort(arr){
    if(arr.length<2) return arr

    let left = []
    let right = []
    let playMid = arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<playMid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),playMid,...quickSort(right)]
}



// console.log(quickSort(arr))

// * without extra spacell