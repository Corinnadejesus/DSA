/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
Return true if the edges of the given graph make up a valid tree, and false otherwise.

Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false

Time: O(v + e) | Space: O(v)

Tree -> graph without cycles
- Convert inputs into graph (matrix or list)
- Figure out if there are cycles in input

There cannot be more than 1 region (non-connected node)

Approach
    - Create to adjacency list helper func
    - Build list with nodes and edges in validTree func
    - Build BFS to check for cycles
*/

const buildAdjList = (n, edges) => {
  //create the adjacency list, set every element to an empty array
  const adjList = Array.from({ length: n }, () => []);

  for (let edge of edges) {
    //Pull out the source and destination of our edge and add it to list
    let [src, dest] = edge;
    //because its an undirected graph (2-way), we want to mirror destination to source
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  return adjList;
};

const bfsCycle = (node, adjList, visited, parent) => {
  let queue = [node];

  while (queue.length) {
    let curr = queue.shift();
    visited[curr] = true; //mark as visited

    //iterate over neighbors from curr node
    for (let neighbor of adjList[curr]) {
      //if they haven't been visited mark them as visited
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        parent[neighbor] = curr;
        queue.push(neighbor);
      } else {
        //** check for cross-edge here **
        if (neighbor !== parent[curr]) {
          return true;
        }
      }
    }
  }

  return false;
};

var validTree = function (n, edges) {
  const adjList = buildAdjList(n, edges);
  const visited = {};
  const parent = {};
  let regions = 0;

  //keep track of visited nodes and parents, help determine if we have a cross-edge
  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      regions++;

      //if theres more than 1 region we do not have a tree, exit out
      if (regions > 1) return false;

      //bfs to determine if there is a cross-edge -> then there is a cycle
      if (bfsCycle(vertex, adjList, visited, parent)) return false;
    }
  }

  return true;
};
