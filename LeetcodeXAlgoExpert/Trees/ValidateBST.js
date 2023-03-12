/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Time: O(n) | Space: O(h)

Recursive DFS Approach
    - We need to compare the left and right subtrees, but also compare the root to something
    - Initally compare the root to (-Infinity for left, Infinity for right)
    - Create our dfs helper function
        - BC: if root is null return true (empty trees are valid BST)
        - BC: if root >= min || root <= max return false

        return boolean calling dfs on both left, min and right, max
    - Call dfs on isValidBST passing in arguments

*/
var isValidBST = function (root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val >= max || root.val <= min) return false;

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(root, -Infinity, Infinity);
};

//Iterative DFS
var isValidBST = function (root) {
  const stack = [[-Infinity, Infinity, root]];

  while (stack.length) {
    const [min, max, node] = stack.pop();
    if (!node) continue;

    if (node.val <= min || node.val >= max) return false;

    stack.push([node.val, max, node.right], [min, node.val, node.left]);
  }

  return true;
};
