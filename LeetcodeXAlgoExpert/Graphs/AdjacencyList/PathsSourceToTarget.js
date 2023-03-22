/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Time: O(2^n - 1, -1 => 2^n * n) | Space: O(n)


Approach

Nodes        0,   1,  2,  3
Neighbors [[1,2],[3],[3],[]]
Start: 0 Goal: 3

    - Recursively call backtrack
        - If set === n - 1 (3) then push path into result
        - Pop off [3] and [0,1] from callstack to backtrack back to 0 (trying to find other directions to go)
        - Continue to check neighbors
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
