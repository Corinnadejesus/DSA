/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Time: O(n) | Space: O(h)
*/

//Postorder Traversal (left, right, root)
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  if (left) return left;
  if (right) return right;
  return null;
};
