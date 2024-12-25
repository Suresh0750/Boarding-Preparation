



// class maxHeap{
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
//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }
//     insertVal(val){
//         this.heap.push(val)
//          this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index>0 && this.heap[this.getParentIndex(index)]<this.heap[index]){
//              this.swap(index,this.getParentIndex(index))
//              index = this.getParentIndex(index)
//         }
//     }
//     extractMax(){
//         if(this.heap.length==0) return null
//         if(this.heap.length==1) return this.heap[0]
//         let removeVal = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//         return removeVal
//     }
//     heapifyDown(){
//         let index = 0
//         while(this.getLeftIndex(index)<this.heap.length){
//             let largeIndex = this.getLeftIndex(index)
//             if(this.getRightIndex(index)<this.heap.length && this.heap[this.getRightIndex(index)]>this.heap[largeIndex]){
//                 largeIndex = this.getRightIndex(index)
//             }
//             if(this.heap[index]>=this.heap[largeIndex]) break;
//             this.swap(index,largeIndex)
//             index = largeIndex
//         }
//     }
// }

// const hp = new maxHeap()


// hp.insertVal(5)
// hp.insertVal(8)
// hp.insertVal(15)
// hp.insertVal(25)
// hp.insertVal(14)
// hp.insertVal(13)

// console.log(hp)
// console.log(hp.extractMax())
// console.log(hp.extractMax())
// // console.log(hp.extractMax())
// console.log(hp)





class maxHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftIndex(index){
        return ((index*2)+1)
    }
    getRightIndex(index){
        return ((index*2)+2)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0&&this.heap[index]>this.heap[this.getParentIndex(index)]){
            this.swap(index,this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }
    extract(){
        if(!this.heap.length) return null
        if(this.heap.length==1) return this.heap.pop()
        let extractVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return extractVal
    }
    heapifyDown(){
        let index = 0
        while(this.getLeftIndex(index)<this.heap.length){
            let largestIndex = this.getLeftIndex(index)
            if(this.getRightIndex(index)<this.heap.length&&this.heap[largestIndex]<this.heap[this.getRightIndex(index)]){
                largestIndex = this.getRightIndex(index)
            }
            
            if(this.heap[largestIndex]<=this.heap[index]) break;
            this.swap(largestIndex,index)
            index = largestIndex
        }
        
    }
    heapSort(arr){
        if(!arr.length) return []
        for(let val of arr){
            this.insert(val)
        }
        let sortArr = []
        
        for(let i=0;i<arr.length;i++){
            sortArr.push(this.extract())
        }
        return sortArr
    }
}

const mH = new maxHeap()

console.log(mH.heapSort([5,3,4,8,4,10,7,56]))

    