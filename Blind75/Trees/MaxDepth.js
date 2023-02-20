/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2

Time: O(n) | Space: O(1)
Approach (Recursive)
    - Base Case: If the root is null return root
    - Get the depth of the left and right trees by recursively calling both left and right sides
    - Get the maximum depth of left and right sides, adding 1 to include the root
*/
var maxDepth = function(root) {
    if(root === null) return 0
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
};
