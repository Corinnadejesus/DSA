/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Input: preorder = [-1], inorder = [-1]
Output: [-1]

Time: O(n) | Space: O(h)

     3
   /  \
  9   20
     / \
    15 7

Approach
- Set base case
- Get the root in preorder
- Find the index of the preorder root in inorder
- Recursively call for the left and right sides of pre and inorder
*/

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]); //3
  let inorderIdx = inorder.indexOf(root.val);
  root.left = buildTree(
    preorder.slice(1, inorderIdx + 1), //[3,9] -> 9
    inorder.slice(0, inorderIdx) //[9,3] -> 9
  );
  root.right = buildTree(
    preorder.slice(inorderIdx + 1),
    inorder.slice(inorderIdx + 1)
  );
  return root;
};
