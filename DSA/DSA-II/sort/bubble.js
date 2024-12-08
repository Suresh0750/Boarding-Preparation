
let arr = [1,2,3,-3,-3,8,-5,-2,100]


//  * 06 | 12 | 24
// function bubbleSort(arr){
//     console.log(arr)
//     let again;
//     do{
//         let i = 0
//         let temp 
//         again = false
//         while(i<arr.length-1){
//             if(arr[i]>arr[i+1]){
//                 temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 again =true
//             }
//             i++
//         }
        
//     }while(again)
//     return arr
// }

// console.log(bubbleSort(arr))

//  * 07 | 12 | 24

// function bubble(arr){
//     let loop ;
//     do{
//         loop = false
//         let i = 0
//         while(i<arr.length){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 loop = true
//             }
//             i++
//         }
//     }while(loop)
//     return arr
// }



//  * 08 | 12 | 24

function bubleSort(arr){
    let loop;
    do{
        loop = false
        let i =0
        while(i<arr.length){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] =[arr[i+1],arr[i]]
                loop = true
            }
            i++
        }
    }while(loop)
    return arr
}

console.log(bubleSort(arr))
