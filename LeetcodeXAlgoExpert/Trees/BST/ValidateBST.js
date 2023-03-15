/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.

Input: root = [10,5,15,3,7,null,13]
Output: false
Explanation: The right root node's value is 15 but its right child's value is 13.

Time: O(n) | Space: O(h)

Recursive DFS Approach
            10
          /   \
         5    15
        / \    \
       3  7    13

    - If current node's value is not between min and max values its not valid
    - Left ( 3 > -I )
        -I < 3 > 5
        min     max

    - Right ( 7 > 5)
        5 < 7 < I
       min     max

*/
var isValidBST = function (root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val >= max || root.val <= min) return false;
    return (
      //parent (root.val) is updated as the left boundary
      dfs(root.left, min, root.val) &&
      //parent (root.val) is updated as the right boundary
      dfs(root.right, root.val, max)
    );
  }

  return dfs(root, -Infinity, Infinity);
};

/////////////////////////****************** ALTERNATIVE ******************///////////////////////

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
