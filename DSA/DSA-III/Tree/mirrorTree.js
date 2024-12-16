

class Node{
    constructor(value,left = null,right=null){
        this.value = value
        this.left = null;
        this.right = null
    }
}

function checkMirror(root1,root2){
    if(!root1&&!root2) return true
    if(!root1 || !root2) return false
    
    return(
        root1.value == root2.value&&
        checkMirror(root1.left,root2.right)&&
        checkMirror(root1.right,root2.left)
        )
}

const tree1 = new Node(5)
tree1.left = new Node(7)
tree1.right  = new Node(4) 
tree1.right  = new Node(8) 
tree1.right  = new Node(9) 
const tree2 = new Node(5)
tree2.right  = new Node(7) 
tree2.left  = new Node(4) 
tree2.left  = new Node(8) 
tree2.left  = new Node(9) 



console.log(checkMirror(tree1,tree2))