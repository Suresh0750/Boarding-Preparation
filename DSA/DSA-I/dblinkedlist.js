    // Define a Node for the Doubly Linked List
class Node {
    constructor(value) {
        this.value = value;  // Data of the node
        this.next = null;    // Pointer to the next node
        this.prev = null;    // Pointer to the previous node
    }
}

// Define the Doubly Linked List
class DoublyLinkedList {
    constructor() {
        this.head = null;    // Start of the list
        this.tail = null;    // End of the list
        this.length = 0;     // Size of the list
    }

    // Add a node at the end of the list
    append(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Update the current tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // Add a node at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // Remove the last node
    removeLast() {
        if (this.length === 0) return null;

        const removedNode = this.tail;

        if (this.length === 1) {
            // If only one node is present
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode;
    }

    // Remove the first node
    removeFirst() {
        if (this.length === 0) return null;

        const removedNode = this.head;

        if (this.length === 1) {
            // If only one node is present
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode;
    }

    // Print the list (for debugging)
    printList() {
        const values = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return values;
    }
}

// Example Usage
const dll = new DoublyLinkedList();
dll.append(10);  // Add to the end
dll.append(20);  // Add to the end
dll.prepend(5);  // Add to the beginning

console.log(dll.printList()); // [5, 10, 20]

dll.removeLast();  // Remove the last node
console.log(dll.printList()); // [5, 10]

dll.removeFirst(); // Remove the first node
console.log(dll.printList()); // [10]






class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}


class doubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(value){
        const newNode = new Node(value)
        if(!this.length){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    prepand(value){
        const newNode = new Node(value)
        if(!this.length){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    removeFirst(){
        if(!this.length) return null
        let removeNode = this.head
        if(this.length==1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.length--
        return removeNode
    }
    removeLast(){
        if(!this.length) return null
        let removeNode = this.tail
        if(this.length==1){
            this.head = null
            this.tail = null
        }else{
            this.tail = removeNode.prev
            this.tail.next = null
        }
        this.length--
        return removeNode
    }
    reverse(){
        if(!this.length) return null
       
        let current = this.head
        let temp = null
        while(current){
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }
        [this.head,this.tail] = [this.tail,this.head]
        return this
    }
    print(){
        if(!this.length) return []
        let values = []
        let curr = this.head
        while(curr){
            values.push(curr.value)
            curr = curr.next
        }
        return values
    }
}