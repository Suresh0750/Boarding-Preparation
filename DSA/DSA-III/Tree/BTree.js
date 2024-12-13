class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return;
        }

        let curr = this.root;
        while (true) {
            if (curr.value === val) {
                return; // Avoid inserting duplicates
            } else if (curr.value > val) {
                if (!curr.left) {
                    curr.left = node;
                    break;  // Stop after insertion
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = node;
                    break;  // Stop after insertion
                }
                curr = curr.right;
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let curr = this.root;
        while (curr) {
            if (curr.value === val) return true;
            else if (curr.value > val) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }

    BFS() {
        if (!this.root) return [];
        let queue = [this.root];
        let result = [];
        while (queue.length) {
            let inNode = queue.shift();
            result.push(inNode.value);
            if (inNode.left) queue.push(inNode.left);
            if (inNode.right) queue.push(inNode.right);
        }
        return result;
    }

    BFSRecursive() {
        if (!this.root) return [];

        let queue = [this.root];
        let result = [];

        function recursive(queue) {
            if (!queue.length) return;
            let inNode = queue.shift();
            result.push(inNode.value);
            if (inNode.left) queue.push(inNode.left);
            if (inNode.right) queue.push(inNode.right);
            recursive(queue);
        }

        recursive(queue);
        return result;
    }

    DFSPreorder() {
        if (!this.root) return [];

        let result = [];

        function recursive(node) {
            if (!node) return;
            result.push(node.value);
            if (node.left) {
                recursive(node.left);
            }
            if (node.right) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        return result;
    }

    DFSInorder() {
        if (!this.root) return [];

        let result = [];

        function recursive(node) {
            if (!node) return;
            if (node.left) {
                recursive(node.left);
            }
            result.push(node.value);
            if (node.right) {
                recursive(node.right);
            }
        }
        recursive(this.root);
        return result;
    }

    DFSPostorder() {
        if (!this.root) return [];

        let result = [];

        function recursive(node) {
            if (!node) return;
            if (node.left) {
                recursive(node.left);
            }
            if (node.right) {
                recursive(node.right);
            }
            result.push(node.value);
        }
        recursive(this.root);
        return result;
    }
}


const bt = new BTree();
bt.insert(8);
bt.insert(7);
bt.insert(6);
bt.insert(10);
bt.insert(11);

console.log(bt); // The binary tree object
console.log(bt.BFS()); // Breadth First Search (Iterative)
console.log(bt.BFSRecursive()); // Breadth First Search (Recursive)
console.log(bt.DFSPreorder()); // Depth First Search (Pre-order)
console.log(bt.DFSInorder()); // Depth First Search (In-order)
console.log(bt.DFSPostorder()); // Depth First Search (Post-order)
