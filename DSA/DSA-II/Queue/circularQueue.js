// class CircularQueue {
//     constructor(size) {
//         this.size = size;    //   Maximum size of the queue
//         this.queue = new Array(size);  // Array to hold the queue elements
//         this.front = -1;     // Front points to the front of the queue
//         this.rear = -1;      // Rear points to the last element in the queue
//     }

//     // Check if the queue is full
//     isFull() {
//         return (this.front === 0 && this.rear === this.size - 1) || (this.rear + 1) % this.size === this.front;
//     }
    

//     // Check if the queue is empty
//     isEmpty() {
//         return this.front === -1;
//     }

//     // Enqueue operation (adding an element to the queue)
//     enqueue(element) {
//         if (this.isFull()) {
//             console.log("Queue is full. Cannot enqueue.");
//             return;
//         }

//         if (this.front === -1) { //* Queue is empty
//             this.front = 0;
//             this.rear = 0;
//         } else {
//             this.rear = (this.rear + 1) % this.size;
//         }

//         this.queue[this.rear] = element;
//         console.log(`${element} enqueued to the queue.`);
//     }

//     // Dequeue operation (removing an element from the queue)
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty. Cannot dequeue.");
//             return;
//         }

//         const removedElement = this.queue[this.front];
//         if (this.front === this.rear) { // Only one element was in the queue
//             this.front = -1;
//             this.rear = -1;
//         } else {
//             this.front = (this.front + 1) % this.size;
//         }

//         console.log(`${removedElement} dequeued from the queue.`);
//     }

//     // Display the elements of the queue
//     display() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty.");
//             return;
//         }

//         let i = this.front;
//         while (i !== this.rear) {
//             console.log(this.queue[i]);
//             i = (i + 1) % this.size;
//         }
//         console.log(this.queue[this.rear]);
//     }
// }

// // Example Usage:
// const queue = new CircularQueue(5); // Create a queue with size 5

// queue.enqueue(10);  // 10 enqueued
// queue.enqueue(20);  // 20 enqueued
// queue.enqueue(30);  // 30 enqueued
// queue.enqueue(40);  // 40 enqueued
// queue.enqueue(50);  // 50 enqueued

// queue.display();    // Display the queue

// queue.dequeue();    // 10 dequeued
// queue.dequeue();    // 20 dequeued

// queue.display();    // Display the queue after dequeue

// queue.enqueue(60);  // 60 enqueued
// queue.enqueue(70);  // 70 enqueued

// queue.display();    // Display the queue after enqueuing more elements





class circularQueue{
    constructor(size){
        this.queue = new Array(size)
        this.size = size
        this.front = -1
        this.rear = -1
    }
    isFull(){
        return (this.front==0 && this.rear == this.size-1) || ((this.rear+1)%this.size==this.front)
    }
    isEmpty(){
        return this.front == -1
    }
    enqueue(element){
        if(this.isFull()) return `queue is full we can't add further`
        
        if(this.front==-1){
            this.front = 0
            this.rear = 0
        }else{
            this.rear = (this.rear+1)%this.size
        }
        this.queue[this.rear]=element
    }
    dequeue(){
        if(this.isEmpty()) return `queue is empty we can't dequeue`
        
        let removeVal = this.queue[this.front]
        if(this.front==this.rear){
            this.front = -1
            this.rear = -1
        }else{
            this.front = (this.front+1)%this.size
        }
        return removeVal
    }
    display(){
        if(this.isEmpty())return `queue is empty`
        let i = this.front
        let result = []
        while(i!==this.rear){
           result.push(this.queue[i])
            i = i+1%this.size
        }
        result.push(this.queue[this.rear])
        return result
    }
}