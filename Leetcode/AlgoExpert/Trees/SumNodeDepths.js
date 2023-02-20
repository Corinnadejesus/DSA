/*
In a binary tree, the distance between a node and a tree's root is the depth.
Write a function that take a binary tree and returns the sum of its node depths.

Input:
Tree =
[
    1,
    2,3,     level -> 1
    4,5,6,7, level -> 2
    8,9      level -> 3
]
Output: 16
*/

//Recursion
//Time: O(n) | Space: O(n)
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  //adding the current depth at every recursive call while adding the depth of left and right sides
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

//DFS
//Time: O(n) | Space: O(n)
function nodeDepths(root) {
  let sum = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
