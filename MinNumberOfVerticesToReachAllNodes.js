// find the smallest set of vertices which all nodes in the graph are reachable 

// input: graph, a list of edges
// output: a list of vertices

// example:
// Input: n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]
// Output: [0, 3]

var findSmallestSetOfVertices = function (n, edges) {
    const vertices = new Set(); // we create a set of vertices
    for (const [a, b] of edges) { // we iterate through the edges
        vertices.add(b); // we add the second vertex to the set
    }
    const result = []; // we create an array to hold the result
    for (let i = 0; i < n; i += 1) { // we iterate through the number of vertices
        if (!vertices.has(i)) { // if the set of vertices does not have the vertex
        result.push(i); // we push the vertex to the result array
        }
    }
    return result; // we return the result
};