/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Input: root = [0]
Output: [0]

Time: O(n) | Space: O(h)
Approach - DFS Recursive
    - If root is null return root
    - Get our root node
    - Find the FIRST left child
    - Update pointer to traverse through the right side of the first left child
    - Set our right root in a temp
    - Take FIRST left and right child nodes and insert them into right side
    -
*/

var flatten = function (root) {
  if (root === null) return;
  if (root.left) {
    var last = root.left;
    while (last.right !== null) last = last.right;
    var tmp = root.right;
    root.right = root.left;
    last.right = tmp;
    root.left = null;
  }

  flatten(root.right);
};
