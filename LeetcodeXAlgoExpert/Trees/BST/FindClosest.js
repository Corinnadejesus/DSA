/*
Write a function that takes in a BST and Target integer and returns the closest value to that target in the BST.
You can assume that there will only be one closest value.

Input = [10,5,15,2,5,13,22,1, null, null, null, 14, null], Target = 12
Output = 13

Time: O(log n) | Space: O(1)

Approach
    - Update the closest value based on the difference of the target, current node, and the previously calculated closest node
    - Based on the target, traverse through tree check if target is smaller than current node (go left) or larger (go right)
*/

function findClosestValueInBst(tree, target) {
  return helper(tree, target, tree.value);
}

function helper(tree, target, closestDist) {
  let node = tree;
  while (node) {
    let currDist = Math.abs(target - node.value);
    if (Math.abs(target - closestDist) > currDist) {
      closestDist = node.value;
    }

    if (target < node.value) {
      node = node.left;
    } else if (target > node.value) {
      node = node.right;
    } else {
      break;
    }
  }
  return closestDist;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
