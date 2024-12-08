


let arr = [1,2,3,-3,-3,8,-5,-2,100]


console.log('quick sort')


//  * 06 | 12 | 24

// * with extra space
// function quickSort(arr){
//     if(arr.length<2) return arr

//     let left = []
//     let right = []
//     let playMid = arr[arr.length-1]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<playMid){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),playMid,...quickSort(right)]
// }



// console.log(quickSort(arr))

// * without extra spacell


//  * 07 | 12 | 24

// function quickSort(arr){
    
//     if(arr.length<2) return arr
    
//     let playMid = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<playMid){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),playMid,...quickSort(right)]
// }


//  * 08 | 12 | 24

// * with space
// function quickSort(arr){
//     if(arr.length<2)  return arr
    
//     let playMid = arr[arr.length-1]
//     let left = []
//     let right = []
    
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<playMid){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),playMid,...quickSort(right)]
// }







function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivIndex =  partition(arr,low,high)
        quickSort(arr,low,pivIndex-1)
        quickSort(arr,pivIndex+1,high)      
    }
    return arr
}
console.log(quickSort(arr))

function partition(arr,low,high){
    let pivod = arr[high]
    let i = low-1
    
    for(let j=low;j<high;j++){
        if(arr[j]<=pivod){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]]  = [arr[high],arr[i+1]]
    
    return i+1
}


// Example usage:
// let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr);
console.log("Sorted array:", arr);
