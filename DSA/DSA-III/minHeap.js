

// class Heap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
//     getLeftIndex(i){
//         return (2*i)+1
//     }
//     getRightIndex(i){
//         return (2*i)+2
//     }
//     insert(val){
//         this.heap.push(val)
//         this.heapifyUp()
//     }
//     swap(i,j){
//          [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index > 0 &&this.heap[index]<this.heap[this.getParentIndex(index)]){
//             this.swap(index,this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//         return null
//     }
//     extractMin(){
//         if(this.heap.length==0) return null
//         if(this.heap.length==1) return this.heap.pop()
        
//         let minVal = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown()
//         return minVal
//     }
//     heapifyDown(){
//         let startIndex = 0
//         while(this.getLeftIndex(startIndex)<this.heap.length){
//             let smallIndex = this.getLeftIndex(startIndex)
//             if(this.getRightIndex(startIndex)<this.heap.length && this.heap[this.getRightIndex(startIndex)]<this.heap[smallIndex]){
//                 smallIndex = this.getRightIndex(startIndex)
//             }
//             if(this.heap[smallIndex]>=this.heap[startIndex]) break;
//             this.swap(smallIndex,startIndex)
//             startIndex = smallIndex
//         }
//     }
// }


// const HP = new Heap()
// HP.insert(8)
// HP.insert(7)
// HP.insert(4)
// HP.insert(9)
// console.log(HP)
// console.log(HP.extractMin())
// console.log(HP.extractMin())
// // console.log(HP.extractMin())
// console.log(HP)





class minHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftIndex(i){
        return (2*i)+1
    }
    getRightIndex(i){
        return (2*i)+2
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }
    swapVal(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    heapifyUp(){
            let index = this.heap.length-1
            let heap = this.heap
            while(index>0 && heap[this.getParentIndex(index)]>heap[index]){
                this.swapVal(index,this.getParentIndex(index))
                index = this.getParentIndex(index)
            }
    }
    extractMin(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
        
        let removeVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return removeVal
    }
    heapifyDown(){
        let index = 0
        while(this.getLeftIndex[index]<this.heap.length){
            let smallIndex = this.getLeftIndex[index]
            if(this.getRightIndex<this.heap.legnth&& this.heap[this.getRightIndex(index)]<this.heap[smallIndex]){
                smallIndex = this.getRightIndex(index)
            }
            if(this.heap[index]<=this.heap[smallIndex]) break;
            this.swapVal(index,smallIndex)
            index = smallIndex
        }
    }
}   

const hp = new minHeap()


hp.insert(5)
hp.insert(4)
hp.insert(10)
hp.insert(1)
hp.insert(15)
console.log(hp)
console.log(hp.extractMin())
console.log(hp.extractMin())
console.log(hp.extractMin())
console.log(hp)
