/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Time: O(2^n - 1, -1 => 2^n * n) | Space: O(n)

Nodes:        0,   1,  2,  3
Neighbors: [[1,2],[3],[3],[]]
Start: 0 => Goal: 3

Approach
  - Add (0) to call stack and currArr, check graph to see neighbors of 0 (1,2) => res [[0]]
  - Traverse to (1), add to call stack and currArr, check neighbors of 1 (3) => res [[0,1]]
  - Add (3) to call stack and currArr => res [[0,1,3]]
  - If currNode is the last node in graph we found all possible solutions, add them to currArr
  - Otherwise backtrack to last node (1) by popping (3) from call stack, then pop (1) off to get to (0)
  - Add (0) to currArr, check unvisited neighbors (2) then add call stack and currArr => res [[0,1,3], [0,2]]
  - Check neighbors of (2) in graph, add to currArr => res [[0,1,3], [0,2,3]]
*/

var allPathsSourceTarget = function (graph) {
  let results = [];

  function backtrack(currNode, currArr) {
    currArr.push(currNode);
    if (currNode === graph.length - 1) {
      results.push([...currArr]);
    }

    let neighbors = graph[currNode];
    for (neigh of neighbors) {
      backtrack(neigh, currArr);
    }

    currArr.pop();
  }

  backtrack(0, []);
  return results;
};
