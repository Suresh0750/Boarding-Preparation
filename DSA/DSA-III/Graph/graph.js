


class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdges(vertex1,vertex2){
        if(!(this.adjacencyList[vertex1])){
         this.addVertex(vertex1)
        }
        if(!(this.adjacencyList[vertex2])){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdges(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v1)=>v1!=vertex2)
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v2)=>v2!=vertex1)
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                this.removeEdges(vertex,this.adjacencyList[vertex][0])
            }
            delete this.adjacencyList[vertex]
        }
    }
    BFS(node){
        if(!node || !this.adjacencyList[node]) return null
        
        let queue =[]
        let data = []
        let visited = {}
        queue.push(node)
        visited[node] = true
        while(queue.length){
            let vertex = queue.shift()
            data.push(vertex)
            for(let key of this.adjacencyList[vertex]){
                if(!(visited[key])){
                    visited[key] = true
                    queue.push(key)
                }
            }
        }
        return data
    }
}


const g = new Graph()

g.addVertex('pranav')
g.addEdges('suresh','hunesh')
g.addEdges('pranav','suresh')
g.addEdges('hunesh','suresh')
console.log(g)
// g.removeVertex('hunesh','suresh')
// g.removeVertex('suresh')
// console.log(g.adjacencyList)
console.log(g.BFS('suresh'))
