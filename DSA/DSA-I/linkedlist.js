
let arr = [1,2,3,4]

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class singleLinkedList{
    
    constructor(){
        this.head = null
        this.size = 0
    }
    push(value){
        const node = new Node(value)
        if(this.head){
            let curr = this.head
            while(curr.next!=null){
                curr = curr.next
            }
            curr.next = node
        }else{
            this.head = node
        }
        this.size++
        return node.value
    }
    unshift(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
        node.next = this.head
        this.head = node
        }
        
        this.size++
    }
    shift(){
        if(this.head){
            let curr = this.head
             this.head = this.head.next
             this.size--
             return curr.value
        }
        return null
    }
    print(){
        if(this.head){
            let curr = this.head
            let res = ''
            while(curr){
                res+=curr.value + ' '
                curr = curr.next
            }
            return res.trim()
        }
        return 'Linked list no node'    
    }
    reverse(){
        if(this.head){
         
            let curr = this.head
            let prev = null 
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        return this
        }
        return null
    }
    remove(index){
        let remove = null
        if(index<0 || index>=this.size || this.head==null){
        return null
        }else if(index==0){
            remove = this.head
            this.head = this.head.next
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            remove =  curr.next
            curr.next = curr.next?.next
        }
        
        return this.print()
    }
}


const sl = new singleLinkedList()

for(let i =0;i<arr.length;i++){
    sl.unshift(arr[i])
}
console.log(sl)
sl.reverse()
// console.log(sl)

// sl.remove(1)
// console.log(sl)







// let arr = [1,2,3,4,5,6]

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class singleLinkedList{
//     constructor(){
//         this.head = null
//     }
//     print(){
//         if(!this.head) return null
        
//         let curr = this.head
//         let res = ''
//         while(curr){
//             res += curr.value + " "
//             curr = curr.next
//         }
//         return res.trim()
//     }
//     prepand(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         return this.print()
//     }
//     appepand(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let curr = this.head
//             while(curr?.next){
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         return this.print()
//     }
//     pop(){
//         if(!this.head) return null
//         let lastNode ;
//         if(!this.head.next){
//             lastNode = this.head
//             this.head = null
//             return lastNode
//         }
        
//         let curr = this.head
//         while(curr.next?.next){
//             curr = curr?.next
//         }
//         lastNode = curr.next
//         curr.next = null
//         return lastNode
//     }
//     deleteVal(val){
//         if(!this.head) return null
        
//         let isVal = null
//         let curr = this.head
//         while(curr){
//             if(curr.value==val){
//                 isVal =  curr.value
//                 curr.value = curr.next.value
//                 curr.next = curr.next?.next
//             }else{
//                 curr = curr.next
//             }
//         }
//         return isVal
//     }
//     findMiddle(){
//         if(!this.head) return null
//         if(!this.head.next){
//             return this.head
//         }
//         let slow = this.head
//         let fast = this.head
//         while(fast?.next){
//             slow = slow.next
//             fast = fast.next?.next
//         }
//         // return slow
//        console.log('mid',slow)
//         slow.value = slow.next?.value
//         slow.next = slow.next?.next
//         return slow
//     }
// }

// const sl = new singleLinkedList()

// for(let i = 0;i<arr.length;i++){
//     // console.log(sl.prepand(arr[i]))
//     sl.prepand(arr[i])
//     // console.log()
// }

// console.log(sl.print())
// console.log(sl.deleteVal(55))
// console.log(sl.print())

// console.log(sl.findMiddle())
// console.log(sl.print())








