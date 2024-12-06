
let arr = [1,2,3,-3,-3,8,-5,-2,100]


//  * 06 | 12 | 24
function selectionSort(arr){
    let min
    console.log('selection sort')
    for(let i=0;i<arr.length;i++){
        min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!=i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}


console.log(selectionSort(arr))