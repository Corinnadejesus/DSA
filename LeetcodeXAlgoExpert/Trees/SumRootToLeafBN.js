/*
You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.
The test cases are generated so that the answer fits in a 32-bits integer.

Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Convert decimal numbers into binary
    - Repeatedly dividing by 2, the remainder at each division is the binary number
Convert binary into decimal (ex. 101)
    - Multiply each digit of the binary number by the corresponding power of two:
        - (1 x 2)^2 + (0 x 2)^1 + (1 x 2)^0
    - Add the result
        - 4 + 0 + 1 = 5

Algorithm to convert binary to decimal:
For every new digit, multiply current value by 2 and add the new digit

Time: O(n) | Space: O(h)
*/

var sumRootToLeaf = function (root) {
  let pathSum = 0;

  function dfs(node, currSum = 0) {
    if (!node) return root;

    //convert binary to decimal
    currSum *= 2;
    currSum += node.val;

    //check if we are on a leaf, add current sum of the leaf to the path sum
    if (!node.left && !node.right) {
      return (pathSum += currSum);
    }
    dfs(node.left, currSum);
    dfs(node.right, currSum);
  }

  dfs(root);
  return pathSum;
};

//////////////////////*********************** ALTERATE **********************///////////////////////

var sumRootToLeaf = function (root) {
  let sum = 0;
  const dfs = (root, path) => {
    if (!root) return;

    if (!root.left && !root.right) {
      sum += parseInt(path + root.val, 2);
      return;
    }
    dfs(root.left, path + root.val);
    dfs(root.right, path + root.val);
  };
  dfs(root, "");
  return sum;
};
