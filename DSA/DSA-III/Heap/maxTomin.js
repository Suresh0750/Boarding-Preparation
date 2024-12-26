

class maxHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftIndex(index){
        return (index*2)+1
    }
    getRightIndex(index){
        return (index*2)+2
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
        while(index>0&&this.heap[this.getParentIndex(index)]<this.heap[index]){
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
        while(this.getLeftIndex(index)<this.heap.length&&this.heap[this.getLeftIndex(index)]>this.heap[index]){
            let largestIndex = this.getLeftIndex(index)
            if(this.getRightIndex(index)<this.heap.length&&this.heap[largestIndex]<this.heap[this.getRightIndex(index)]){
                largestIndex = this.getRightIndex(index)
            }
            if(this.heap[index]>=this.heap[largestIndex]) break;
            this.swap(index,largestIndex)
            index = largestIndex
        }
    }
    convertMin(){
        let n = this.heap.length
        const minHeapifyDown = (index)=>{
            while(this.getLeftIndex(index)<n && this.heap[index]>this.heap[this.getLeftIndex(index)]){
                let smallIndex = this.getLeftIndex(index)
                if(this.getRightIndex(index)<n&&this.heap[smallIndex]>this.heap[this.getRightIndex(index)]){
                    smallIndex = this.getRightIndex(index)
                }
                if(this.heap[index]<=this.heap[smallIndex]) break;
                this.swap(index,smallIndex)
                index = smallIndex    
            }
        }
            
        for(let i= Math.floor((n/2)-1);i>=0;i--){
            minHeapifyDown(i)
        }
        return this.heap
    }
}

const mh = new maxHeap();
mh.insert(20);
mh.insert(15);
mh.insert(10);
mh.insert(8);
mh.insert(12);
mh.insert(5);
mh.insert(7);

console.log("MaxHeap:", mh.heap); // Should print the max-heap: [20, 15, 10, 8, 12, 5, 7]
console.log("MinHeap:", mh.convertMin()); // Should convert and print the min-heap
