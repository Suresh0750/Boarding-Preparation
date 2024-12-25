        
        
        // class Graph{
        //     constructor(){
        //         this.adjacencyList = {}
        //     }
        //     addVertex(vertex){
        //         if(!(this.adjacencyList[vertex])){
        //             this.adjacencyList[vertex] = []
        //         }
        //     }
        //     addEdges(vertex1,vertex2){
        //         if(!this.adjacencyList[vertex1]){
        //             this.addVertex(vertex1)
        //         }
        //         if(!this.adjacencyList[vertex2]){
        //             this.addVertex(vertex2)
        //         }
        //         let exitingEdge = this.adjacencyList[vertex1].find((v)=>v==vertex2)
        //         if(!exitingEdge){
        //              this.adjacencyList[vertex1].push(vertex2)
        //             this.adjacencyList[vertex2].push(vertex1)
        //         }
        //     }
        //     removeEdges(vertex1,vertex2){
        //         if(this.adjacencyList[vertex1]){
        //             this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v)=>v!==vertex2)
        //         }
        //         if(this.adjacencyList[vertex2]){
        //             this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v)=>v!==vertex1)
        //         }
        //     }
        //     removeVertex(vertex){
        //         if(this.adjacencyList[vertex]){
        //             while(this.adjacencyList[vertex].length){
        //                 this.removeEdges(vertex,this.adjacencyList[vertex][0])
        //             }
        //             delete this.adjacencyList[vertex]
        //         }
        //     }
        //     BFS(node){
        //         if(!node || !this.adjacencyList[node]) return 
        //         let queue = []
        //         let data = []
        //         let visited = {}
        //         queue.push(node)
        //         visited[node] = true
        //         while(queue.length){
        //             let vertex = queue.shift()
                    
        //             data.push(vertex)
                   
        //             for(let key of this.adjacencyList[vertex]){
        //                 if(!visited[key]){
        //                     visited[key] = true
        //                     queue.push(key)
        //                 }
        //             }
        //         }
        //         return data
        //     }
        //     DFSIterative(vertex){
        //         let visited = {}
        //         let data = []
        //         const dfsHelper = (v)=>{
        //             if(!v) return
        //             data.push(v)
        //             visited[v] = true
        //              for(let neighbor of this.adjacencyList[v]){
        //                 if(!visited[neighbor]){
        //                     dfsHelper(neighbor)
        //                 }
        //             }
        //         }
        //         dfsHelper(vertex)
        //         return data
        //     }
        // }
        
        
        // const gh = new Graph()
        
        // gh.addVertex('suresh')
        // gh.addVertex('hunesh')
        // gh.addVertex('pranav')
        // gh.addEdges('suresh','hunesh')
        // gh.addEdges('hunesh','pranav')
        // gh.addEdges('pranav','suresh')
        // console.log(gh)
        // // gh.removeVertex('suresh')
        // console.log(gh)
        // console.log(gh.BFS('suresh'))
        // console.log(gh.DFSIterative('suresh'))

        class Graph {
            constructor() {
                this.adjacencyList = {};
            }
        
            addVertex(vertex) {
                if (!this.adjacencyList[vertex]) {
                    this.adjacencyList[vertex] = [];
                }
            }
        
            addEdge(vertex1, vertex2) {
                if (!this.adjacencyList[vertex1]) {
                    this.addVertex(vertex1);
                }
                if (!this.adjacencyList[vertex2]) {
                    this.addVertex(vertex2);
                }
                if (!this.adjacencyList[vertex1].includes(vertex2)) {
                    this.adjacencyList[vertex1].push(vertex2);
                    this.adjacencyList[vertex2].push(vertex1);
                }
            }
        
            removeEdge(vertex1, vertex2) {
                if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        
                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                    (neighbor) => neighbor !== vertex2
                );
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                    (neighbor) => neighbor !== vertex1
                );
            }
        
            removeVertex(vertex) {
                if (!this.adjacencyList[vertex]) return;
        
                for (let neighbor of this.adjacencyList[vertex]) {
                    this.removeEdge(vertex, neighbor);
                }
                delete this.adjacencyList[vertex];
            }
        
            BFS(start) {
                if (!this.adjacencyList[start]) return [];
        
                const queue = [start];
                const result = [];
                const visited = {};
                visited[start] = true;
        
                while (queue.length) {
                    const current = queue.shift();
                    result.push(current);
        
                    for (let neighbor of this.adjacencyList[current]) {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            queue.push(neighbor);
                        }
                    }
                }
                return result;
            }
        
            depthFirstSearchRecursive(start) {
                if (!this.adjacencyList[start]) return [];
        
                const result = [];
                const visited = {};
                const dfs = (vertex) => {
                    if (!vertex) return;
                    visited[vertex] = true;
                    result.push(vertex);
        
                    for (let neighbor of this.adjacencyList[vertex]) {
                        if (!visited[neighbor]) {
                            dfs(neighbor);
                        }
                    }
                };
        
                dfs(start);
                return result;
            }
        }
        
        // Example Usage:
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "C");
        
        console.log("BFS:", graph.BFS("A")); // ['A', 'B', 'C']
        console.log("DFS Recursive:", graph.depthFirstSearchRecursive("A")); // ['A', 'B', 'C']
        