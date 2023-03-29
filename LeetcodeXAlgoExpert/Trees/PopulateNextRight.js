/*
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
*/

//BFS
//Time: O(n) | Space: O(n)
var connectBFS = function (root) {
  if (root == null) return root;
  let queue = [root];
  while (queue.length !== 0) {
    let next = [];
    while (queue.length !== 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left !== null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};

//DFS Recursive
//Time: O(n) | Space: O(1)
var connect = function (root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};
