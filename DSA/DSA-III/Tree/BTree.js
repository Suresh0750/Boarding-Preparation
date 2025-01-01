// class Node {
//     constructor(value) {
//         this.value = value;
//         this.right = null;
//         this.left = null;
//     }
// }

// class BTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(val) {
//         const node = new Node(val);
//         if (!this.root) {
//             this.root = node;
//             return;
//         }

//         let curr = this.root;
//         while (true) {
//             if (curr.value === val) {
//                 return; // Avoid inserting duplicates
//             } else if (curr.value > val) {
//                 if (!curr.left) {
//                     curr.left = node;
//                     break;  // Stop after insertion
//                 }
//                 curr = curr.left;
//             } else {
//                 if (!curr.right) {
//                     curr.right = node;
//                     break;  // Stop after insertion
//                 }
//                 curr = curr.right;
//             }
//         }
//     }

//     find(val) {
//         if (!this.root) return false;
//         let curr = this.root;
//         while (curr) {
//             if (curr.value === val) return true;
//             else if (curr.value > val) {
//                 curr = curr.left;
//             } else {
//                 curr = curr.right;
//             }
//         }
//         return false;
//     }

//     BFS() {
//         if (!this.root) return [];
//         let queue = [this.root];
//         let result = [];
//         while (queue.length) {
//             let inNode = queue.shift();
//             result.push(inNode.value);
//             if (inNode.left) queue.push(inNode.left);
//             if (inNode.right) queue.push(inNode.right);
//         }
//         return result;
//     }

//     BFSRecursive() {
//         if (!this.root) return [];

//         let queue = [this.root];
//         let result = [];

//         function recursive(queue) {
//             if (!queue.length) return;
//             let inNode = queue.shift();
//             result.push(inNode.value);
//             if (inNode.left) queue.push(inNode.left);
//             if (inNode.right) queue.push(inNode.right);
//             recursive(queue);
//         }

//         recursive(queue);
//         return result;
//     }

//     DFSPreorder() {
//         if (!this.root) return [];

//         let result = [];

//         function recursive(node) {
//             if (!node) return;
//             result.push(node.value);
//             if (node.left) {
//                 recursive(node.left);
//             }
//             if (node.right) {
//                 recursive(node.right);
//             }
//         }
//         recursive(this.root);
//         return result;
//     }

//     DFSInorder() {
//         if (!this.root) return [];

//         let result = [];

//         function recursive(node) {
//             if (!node) return;
//             if (node.left) {
//                 recursive(node.left);
//             }
//             result.push(node.value);
//             if (node.right) {
//                 recursive(node.right);
//             }
//         }
//         recursive(this.root);
//         return result;
//     }

//     DFSPostorder() {
//         if (!this.root) return [];

//         let result = [];

//         function recursive(node) {
//             if (!node) return;
//             if (node.left) {
//                 recursive(node.left);
//             }
//             if (node.right) {
//                 recursive(node.right);
//             }
//             result.push(node.value);
//         }
//         recursive(this.root);
//         return result;
//     }
// }


// const bt = new BTree();
// bt.insert(8);
// bt.insert(7);
// bt.insert(6);
// bt.insert(10);
// bt.insert(11);

// console.log(bt); // The binary tree object
// console.log(bt.BFS()); // Breadth First Search (Iterative)
// console.log(bt.BFSRecursive()); // Breadth First Search (Recursive)
// console.log(bt.DFSPreorder()); // Depth First Search (Pre-order)
// console.log(bt.DFSInorder()); // Depth First Search (In-order)
// console.log(bt.DFSPostorder()); // Depth First Search (Post-order)


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the tree
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (current.value === value) return undefined; // Duplicates not allowed
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
        return current;
    }

    // Find a value in the tree
    find(value) {
        if (!this.root) return null;

        let current = this.root;
        while (current) {
            if (current.value === value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }

    // Find the minimum value in a subtree
    findMin(node = this.root) {
        if (!node) return null;

        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // Find the maximum value in a subtree
    findMax(node = this.root) {
        if (!node) return null;

        let current = node;
        while (current.right) {
            current = current.right;
        }
        return current;
    }

    // Breadth-First Search
    breadthFirstSearch() {
        if (!this.root) return [];
        
        const queue = [this.root];
        const result = [];
        while (queue.length) {
            const current = queue.shift();
            result.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }

    // Depth-First Search (Preorder)
    depthFirstPreorder() {
        if (!this.root) return [];
        
        const result = [];
        function traverse(node) {
            if (!node) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // Depth-First Search (Inorder)
    depthFirstInorder() {
        if (!this.root) return [];
        
        const result = [];
        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // Depth-First Search (Postorder)
    depthFirstPostorder() {
        if (!this.root) return [];
        
        const result = [];
        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    // Delete a node from the tree
    delete(value) {
        const deleteNode = (root, value) => {
            if (!root) return null;
            if (value < root.value) {
                root.left = deleteNode(root.left, value);
            } else if (value > root.value) {
                root.right = deleteNode(root.right, value);
            } else {
                // Node to delete found
                if (!root.left && !root.right) return null; // No children
                if (!root.left) return root.right; // One child
                if (!root.right) return root.left; // One child

                // Node with two children
                const minNode = this.findMin(root.right);
                root.value = minNode.value;
                root.right = deleteNode(root.right, minNode.value);
            }
            return root;
        };
        this.root = deleteNode(this.root, value);
    }
    calculateHeight(node=this.root){
        if(!node) return -1
        let leftNode = this.calculateHeight(node.left)
        let rightNode = this.calculateHeight(node.right)
        return Math.max(leftNode,rightNode)+1
    }
}


const tree = new BSTree();

// Test insertion
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
console.log(tree.BFS()); // [10, 5, 15, 3, 7]

// Test deletion
tree.delete(5);
console.log(tree.BFS()); // [10, 7, 15, 3]

// Test findMin and findMax
console.log(tree.findMin().value); // 3
console.log(tree.findMax().value); // 15

// Test traversals
console.log(tree.DFSPreorder()); // [10, 7, 3, 15]
console.log(tree.DFSInorder()); // [3, 7, 10, 15]
console.log(tree.DFSPostorder()); // [3, 7, 15, 10]

// Test find
console.log(tree.find(15)); // Node with value 15
console.log(tree.find(100)); // null