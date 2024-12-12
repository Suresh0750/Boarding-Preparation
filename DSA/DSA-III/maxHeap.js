



class maxHeap{
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
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    insertVal(val){
        this.heap.push(val)
         this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0 && this.heap[this.getParentIndex(index)]<this.heap[index]){
             this.swap(index,this.getParentIndex(index))
             index = this.getParentIndex(index)
        }
    }
    extractMax(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap[0]
        let removeVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return removeVal
    }
    heapifyDown(){
        let index = 0
        while(this.getLeftIndex(index)<this.heap.length){
            let largeIndex = this.getLeftIndex(index)
            if(this.getRightIndex(index)<this.heap.length && this.heap[this.getRightIndex(index)]>this.heap[largeIndex]){
                largeIndex = this.getRightIndex(index)
            }
            if(this.heap[index]>=this.heap[largeIndex]) break;
            this.swap(index,largeIndex)
            index = largeIndex
        }
    }
}

const hp = new maxHeap()


hp.insertVal(5)
hp.insertVal(8)
hp.insertVal(15)
hp.insertVal(25)
hp.insertVal(14)
hp.insertVal(13)

console.log(hp)
console.log(hp.extractMax())
console.log(hp.extractMax())
// console.log(hp.extractMax())
console.log(hp)


