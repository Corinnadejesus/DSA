/*
You’re given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

Input:
Edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]
Output: true, because there are multiple Connections
1) 1 -> 2 -> 0 -> 1
2) 0 -> 1 -> 2 -> 0
3) 0 -> 1 -> 4 -> 2 -> 0
*/

function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    const hasCycle = currentCycle(edges, i);
    if (hasCycle) {
      return hasCycle;
    }
  }
  return false;
}

function currentCycle(adjacencyList, connection) {
  const queue = [connection];
  const visitedEdges = {};
  while (queue.length > 0) {
    const currentVertex = queue.shift();
    if (adjacencyList[currentVertex].includes(connection)) {
      return true;
    }
    visitedEdges[currentVertex] = true;
    adjacencyList[currentVertex].forEach((edge) => {
      if (!(edge in visitedEdges)) {
        queue.push(edge);
      }
    });
  }
  return false;
}
