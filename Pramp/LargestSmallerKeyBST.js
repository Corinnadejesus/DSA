/*
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Input: [20, 9, 25, 5, 12, null, null, null, null, 11, 14], num = 17
Output: 14

Time: O(log N) | Space: O(1)

Approach
  - Set end as -1 by default if we don't find larger smaller key
  - While node has values
    - If node value is less than num
      - Update end as node value and continue left
    - Otherwise continue right
*/

findLargestSmallerKey = function (num) {
  let node = this.root;
  let end = -1;
  while (node) {
    if (node.key < num) {
      end = node.key;
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return end;
};
