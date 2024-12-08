
let arr = [1,2,3,-3,-3,8,-5,-2,100]
console.log('selection sort')


//  * 06 | 12 | 24
// function selectionSort(arr){
//     let min
//     console.log('selection sort')
//     for(let i=0;i<arr.length;i++){
//         min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min = j
//             }
//         }
//         if(min!=i){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }
//     return arr
// }

//  * 07 | 12 | 24

// function selectionSort(arr){
    
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min = j
//             }
//         }
//         if(min!==i){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }
//     return arr
// }


// console.log(selectionSort(arr))

//  * 08 | 12 | 24

function selectionSort(arr){
    
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!==i){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }
    }
    return arr
}

console.log(selectionSort(arr))
