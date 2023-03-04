/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Time: O(v + e) | Space: O(v + e)

Approach (DFS)
Build Adjacency List to find neighbors of 1 and 2
Map {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}

Set (0, 1, 2)

Create a map to build adjacency list
    - FOR DIRECTED GRAPHS
        - Add the destination to the source
    - FOR UNDIRECTED GRAPHS (mirroring needed)
        - Add the destination to the source
        - Add source to the destination
Create a set to include all visited vertex
Traverse through edges
    - If the graph has the vertex, then set the edge. Otherwise set the vertex and [edge]
    - If the graph has the edge, then set the vertex. Otherwise set the edge and [vertex]
Create the DFS Helper Function to visit neighbors
Call DFS on the source and return true/false if the set contains the value of the destination
*/

var validPath = function (n, edges, source, destination) {
  let graph = new Map();
  let visited = new Set();

  //Build adjacency list with Map
  for (let [vertex, edge] of edges) {
    if (graph.has(vertex)) {
      graph.get(vertex).push(edge);
    } else {
      graph.set(vertex, [edge]);
    }

    if (graph.has(edge)) {
      graph.get(edge).push(vertex);
    } else {
      graph.set(edge, [vertex]);
    }
  }

  //DFS through Neighbors
  function dfs(vertex) {
    visited.add(vertex);
    let neighbors = graph.get(vertex);
    if (neighbors && neighbors.length > 0) {
      for (let neighbor of neighbors) {
        //if neighbor hasn't been visited recursive call dfs to all neighbors
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
  }

  //Start DFS at source to get to destination
  dfs(source);
  return visited.has(destination);
};
