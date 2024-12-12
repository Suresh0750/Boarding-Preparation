

/* 
    Binary Search
    Binary search is a more efficient searching algorithm, but it requires that the array be sorted beforehand.
    Time Complexity:
        Best Case: O(1) — The target is found at the middle index in the first check.
        Worst Case: O(log n) — The array is halved each time.
        Space Complexity:    O(1) for iterative implementation, O(log n) for recursive implementation.
*/


const arr = [1, 2, 3, 4, 7, 9];
const target = 1;


function binary(arr,target){
    let start = 0
    let end = arr.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    return -1
}


console.log(binary(arr,target))


function recursiveBinarySerach(arr,target,low=0,high=arr.length-1){
    if(low>high){
        return -1
    }
    const mid = Math.floor((low+high)/2)
    if(arr[mid]==target){
        return mid
    }else if(arr[mid]<target){
        return recursiveBinarySerach(arr,target,mid+1,high)
    }else{
        return recursiveBinarySerach(arr,target,low,mid-1)
    }
}

console.log(recursiveBinarySerach(arr,7))

