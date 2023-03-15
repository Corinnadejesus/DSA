/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Approach
    - We don't know whether p or q will be lowest or greatest value
    - At every iteration (check the rules of a BST)
        - If p and q is greater than the current node, it HAS to be on the right side
        - If p and q is less than the current node, it HAS to be on the left side
*/

//Time: O(n) | Space: O(1)
// Iterative
var lowestCommonAncestor = function (root, p, q) {
  let currentNode = root;
  while (currentNode) {
    if (p.val > currentNode.val && q.val > currentNode.val) {
      currentNode = currentNode.right;
    } else if (p.val < currentNode.val && q.val < currentNode.val) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
};

//Time: O(n) | Space: O(h)
//Recursive: First Option
var lowestCommonAncestor = function (root, p, q) {
  let ancestor = null;
  function traverse(node) {
    if (p.val > node.val && q.val > node.val) {
      traverse(node.right);
    } else if (p.val < node.val && q.val < node.val) {
      traverse(node.left);
    } else {
      ancestor = node;
    }
  }

  traverse(root);
  return ancestor;
};

//Time: O(n) | Space: O(h)
//Recursive: Second Option
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};
