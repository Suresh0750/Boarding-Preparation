


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BTree{
    constructor(){
        this.root = null
    }
    insert(val){
        const node = new Node(val)
        if(!this.root){
            this.root = node
            return
        }
        let curr = this.root
        while(true){
            if(curr.value==val){
                return 
            }else if(val<curr.value){
                if(!curr.left){
                    curr.left = node
                    break;
                }
                curr = curr.left
            }else{
                if(!curr.right){
                    curr.right = node
                    break;
                }
                curr = curr.right
            }
        }
        return this
    }
    find(val){
        if(!this.root) return false
        let curr = this.root
        while(curr){
            if(curr.value==val){
                return true
            }else if(val<curr.value){
                curr = curr.left
            }else{
                curr= curr.right
            }
        }
        return false
    }
    BFS(){
        if(!this.root) return []
        let queue = [this.root]
        let result = []
        while(queue.length){
            let extractNode = queue.shift()
            result.push(extractNode.value)
            if(extractNode.left){
                queue.push(extractNode.left)
            }
            if(extractNode.right){
                queue.push(extractNode.right)
            }
        }
        return result
    }
    DFSPreOrder(){
        if(!this.root) return []
        
        let result = []
        function recursive(node){
            if(!node) return
            result.push(node.value)
            if(node.left){
                recursive(node.left)
            }
            if(node.right){
                recursive(node.right)
            }
        }
        return result
    }
       DFSInOrder(){
        if(!this.root) return []
        
        let result = []
        function recursive(node){
            if(!node) return
            if(node.left){
                recursive(node.left)
            }
            result.push(node.value)
            if(node.right){
                recursive(node.right)
            }
        }
        return result
    }
       DFSPostOrder(){
        if(!this.root) return []
        
        let result = []
        function recursive(node){
            if(!node) return
            if(node.left){
                recursive(node.left)
            }
            if(node.right){
                recursive(node.right)
            }
            result.push(node.value)
        }
        return result
    }
    findHeight(){
        if(!this.root) return -1
        function getHeight(node){
            if(!node) return -1
            let leftNode = getHeight(node.left)
            let rightNode = getHeight(node.right)
            
            return Math.max(leftNode,rightNode)+1
        }
        return getHeight(this.root)
    }
    
}

const tree = new BTree();
console.log(tree.findHeight());  // * Output: -1 (since the tree is empty)

tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.findHeight());  // * Output: 1 (height of the tree) because there is one level.
