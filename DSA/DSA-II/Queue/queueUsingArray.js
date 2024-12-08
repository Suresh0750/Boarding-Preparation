



class Queue{
    constructor(){
        this.item = []
    }
    enQueue(value){
        this.item.push(value)
        return true
    }
    deQueue(){
        if(!this.item.length) return null
        
        return this.item.shift()
    }
    isEmpty(){
        return this.item.length==0
    }
    isPeak(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }
    
}

const Q = new Queue()


Q.enQueue(5)
Q.enQueue(10)
Q.enQueue(15)
console.log(Q.deQueue())
console.log(Q)