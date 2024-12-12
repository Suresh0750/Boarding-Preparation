
/* 
    Linear search

    Linear search is the simplest searching algorithm, where we sequentially check each element of the array to find the target value. 
    If the target value is found, we return its index; otherwise, we return -1.

    Time Complexity:
        Best Case: O(1) — The element is found at the first index.
        Worst Case: O(n) — The element is either at the last index or not in the array at all.
    Space Complexity: O(1)

*/

const arr = [4, 2, 7, 1, 9, 3];
const target = 1;


function linear(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}


console.log(linear(arr,target))