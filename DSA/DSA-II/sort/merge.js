


let arr = [1,2,3,-3,-3,8,-5,-2,100]

console.log('merge sort')

//  * 06 | 12 | 24


// function mergeSort(arr){
//     console.log('merge sort')
//     if(arr.length<2) return arr

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid,arr.length)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sort = []

//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }

// console.log(mergeSort(arr))


//  * 07 | 12 | 24

// function mergeSort(arr){
//     if(arr.length<2) return arr
    
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid,arr.length)
//     return merge(mergeSort(left),mergeSort(right))
// }


// function merge(left ,right){
//     let sort = []
    
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }


//  * 08 | 12 | 24

// function mergeSort(arr){
//     if(arr.length<2) return arr
    
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid,arr.length)
//     return merge(mergeSort(left),mergeSort(right))
// }


// function merge(left,right){
    
//     let sort = []
//     while(left.length&& right.length){
//         if(left[0]<right[0]){
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }

// console.log(mergeSort(arr))



// * TOI

// * 01-01-25

function mergeSort(arr){
    if(arr.length<2) return arr

    let mid = Math.floor((arr.length/2))
    let left = arr.slice(0,mid)
    let right = arr.slice(mid,arr.length)
    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){

    let sort = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}


console.log(mergeSort(arr))