//Time Complexity: O(V + E)   Auxiliary Space: O(V)

// Javascript program to detect if a path
// exists between any two vertices
// for the given undirected graph
 
// Class representing a undirected
// graph using matrix representation
export default class Graph
{
    constructor(V)
    {
        this.V = V;
        this.adj = new Array();
        for(let i = 0; i < V; i++)
        {
            this.adj[i] = new Array();
        }
    }
     
    // Function to add edge between nodes
    addEdge(v, w)
    {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }
     
    // Function to check if nodes are reachable
    isReachable(s, d)
    {
        // Base case
        if (s == d)
            return true;
 
        // Mark all the vertices as not visited
        var visited = new Array(this.V).fill(false);
         
        // Create a queue for BFS
        var queue = new Array();
 
        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.push(s);
 
        while (queue.length != 0)
        {
         
            // Dequeue a vertex from queue and print it
            s = queue.pop();
 
            // Get all adjacent vertices of the dequeued vertex s
            // If a adjacent has not been visited, then mark it
            // visited and enqueue it
            for (var i = 0; i < this.adj[s].length; i++) {
 
                // If this adjacent node is the destination node,
                // then return true
                if (this.adj[s][i] == d)
                    return true;
 
                // Else, continue to do BFS
                if (!visited[this.adj[s][i]]) {
                    visited[this.adj[s][i]] = true;
                    queue.push(this.adj[s][i]);
                }
            }
        }
        // If BFS is complete without visiting d
        return false;
    }
}