class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return (index * 2) + 1;
    }

    getRightIndex(index) {
        return (index * 2) + 2;
    }

    enqueue(val, priority) {
        this.heap.push(new Node(val, priority));
        this.heapifyUp();
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)].priority > this.heap[index].priority
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    dequeue() {
        if (!this.heap.length) return null; // Handle empty queue
        if (this.heap.length === 1) return this.heap.pop().value; // Handle single element

        const removeNode = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return removeNode.value;
    }

    heapifyDown() {
        let index = 0;

        while (this.getLeftIndex(index) < this.heap.length) {
            let smallIndex = this.getLeftIndex(index);

            if (
                this.getRightIndex(index) < this.heap.length &&
                this.heap[this.getRightIndex(index)].priority < this.heap[smallIndex].priority
            ) {
                smallIndex = this.getRightIndex(index);
            }

            if (this.heap[index].priority <= this.heap[smallIndex].priority) break;

            this.swap(index, smallIndex);
            index = smallIndex;
        }
    }
}


const pq = new PriorityQueue();

pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);

console.log(pq.dequeue()); // Expected: "Task B" (priority 1)
console.log(pq.dequeue()); // Expected: "Task C" (priority 2)
console.log(pq.dequeue()); // Expected: "Task A" (priority 3)
console.log(pq.dequeue()); // Expected: null (queue is empty)
