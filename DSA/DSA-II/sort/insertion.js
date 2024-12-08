


let arr = [1,2,3,-3,-3,8,-5,-2,100]

//  * 06 | 12 | 24

// function insertionSort(arr){
   
//     for(let i = 0;i<arr.length;i++){
//         let invalue = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>invalue){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = invalue
//     }
//     return arr
// }


// console.log(insertionSort(arr))

//  * 07 | 12 | 24

// function insertionSort(arr){
    
//     for(let i=0;i<arr.length;i++){
//         let invalue = arr[i]
//         let j = i-1
//         while(j>=0&&arr[j]>invalue){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = invalue
//     }
//     return arr
// }


//  * 08 | 12 | 24

function insertSort(arr){
    for(let i=0;i<arr.length;i++){
        let invalue = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>invalue){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = invalue
    }
    return arr
}
console.log('insert sort')
console.log(insertSort(arr))