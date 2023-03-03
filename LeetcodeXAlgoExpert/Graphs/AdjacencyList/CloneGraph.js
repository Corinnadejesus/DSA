/*
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Time: O(n + m) | Space: O(n)

Recursive DFS Approach
    - Create visited object that will map old nodes to new node copies
    - Create DFS Helper Function
        - Base Cases
            - If node is null return the node
            - If visited has a copy as its value return it
        - Create a copyNode
        - Set node value in visited as copyNode
        - Loop through neighbors
            - Populate copyNode neighbors with edges from recursive call
        - return root
    - Continue to call dfs on other nodes
*/

var cloneGraph = function (node) {
  let visited = new Map();

  function dfs(node) {
    if (node === null) return node;
    if (visited.has(node.val)) return visited.get(node.val);
    let copyNode = new Node(node.val);
    visited.set(node.val, copyNode);

    for (let neighbor of node.neighbors) {
      copyNode.neighbors.push(dfs(neighbor));
    }
    return copyNode;
  }
  return dfs(node);
};
