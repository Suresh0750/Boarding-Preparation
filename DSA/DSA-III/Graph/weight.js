



class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!(this.adjacencyList[vertex])){
            this.adjacencyList[vertex] = []
        }
    }
    addEdges(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        // *Check for duplicate edge
        const existingEdge = this.adjacencyList[vertex1].find(edge => edge.node === vertex2);
        if (existingEdge) {
            existingEdge.weight = weight; // *  Updat   e weight if edge exists
        } else {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }
    display(){
        
        for(let vertex in this.adjacencyList){
            console.log(this.adjacencyList[vertex])
        }
    }
}

const wG= new Graph()

wG.addVertex('pranav')
wG.addVertex('suresh')
wG.addVertex('hunesh')
wG.addEdges('pranav','suresh',5)
wG.addEdges('pranav','hunesh',6)
wG.addEdges('hunesh','suresh',7)
wG.addEdges('hunesh','pranav',8)
wG.addEdges('suresh','pranav',9)
wG.display()