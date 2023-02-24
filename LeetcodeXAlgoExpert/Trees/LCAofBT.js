/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Time: O(n) | Space: O(h)
*/

var lowestCommonAncestor = function (root, p, q) {
  let result = null;

  const dfs = (node) => {
    if (node === null) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let curr = node === p || node === q;
    //if 2/3 nodes are true then we reassign result to its lowest common ancestor
    if (left + right + curr >= 2) {
      result = node;
    }

    return left || right || curr;
  };
  dfs(root);
  return result;
};
