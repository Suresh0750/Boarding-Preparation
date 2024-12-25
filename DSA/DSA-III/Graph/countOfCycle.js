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

        // Add the edge if it does not already exist
        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;

        for (let neighbor of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, neighbor);
        }
        delete this.adjacencyList[vertex];
    }

    BFS(vertex) {
        if (!this.adjacencyList[vertex]) return;

        let queue = [vertex];
        let result = [];
        let visited = {};
        visited[vertex] = true;

        while (queue.length) {
            let extractVertex = queue.shift();
            result.push(extractVertex);
            for (let neighbor of this.adjacencyList[extractVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    countOfCycles() {
        const visited = new Set();

        let count = 0;

        const dfs = (vertex, parent) => {
            visited.add(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true; // Cycle found
                    }
                } else if (neighbor !== parent) {
                    return true; // Cycle found
                }
            }

            return false;
        };

        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) {
                    count++;
                }
            }
        }

        return count;
    }

    depthFirstSearchRecursive(vertex) {
        if (!this.adjacencyList[vertex]) return;

        let result = [];
        let visited = {};

        const dfs = (v) => {
            if (!v) return null;
            result.push(v);
            visited[v] = true;

            for (let neighbor of this.adjacencyList[v]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        };

        dfs(vertex);
        return result;
    }
}
