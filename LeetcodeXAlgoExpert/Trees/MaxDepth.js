/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2

Time: O(n) | Space: O(h) h -> maximum height of the tree for every recursive call
Approach (DFS Recursive)
    - Base Case: If the root is null return root
    - Get the depth of the left and right trees by recursively calling both left and right sides
    - Get the maximum depth of left and right sides, adding 1 to include the root
*/

//DFS Recursive
var maxDepth = function (root) {
  if (root === null) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

//BFS
var maxDepth = function (root) {
  let q = [root];
  let count = 0;
  while (q.length) {
    const next = [];
    for (const n of q) {
      if (!n) continue;
      next.push(n.left);
      next.push(n.right);
    }
    if (next.length) count++;
    q = next;
  }
  return count;
};
