



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.frond = null
        this.rear = null
        this.size = 0
    }
    enQueue(value){
        const node = new Node(value)
        if(!this.frond){
            this.frond = node
        }else{
            this.rear.next = node
        }
        this.rear =node
        this.size++
    }
    deQueue(){
        if(!this.frond) return null

        let removeValue = this.frond.value
        this.frond = this.frond.next

        if(!this.frond){
            this.rear = null
        }
        this.size--
        return removeValue
    }
    isEmpty(){
        return this.size==0
    }
    isPeak(){
        return this.isEmpty() ? null : this.frond.value
    }
    getSize(){
        return this.size
    }
}

const qL = new Queue()

qL.enQueue(5)
qL.enQueue(10)
qL.enQueue(9)

qL.deQueue()
console.log(qL)