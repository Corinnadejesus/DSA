/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Time: O(n) | Space: O(n)

Approach
- Set a result array
- Add a queue with the root
- While the queue has length
    - Initializing length variable and set it as queue’s length
    - Push all values in queue into the result as an array
    - While the length variable exist
      - Shift current node from queue
      - If the node.left is not null push left values into queue
      - If the node.right is not null push right values into queue
      - Decrement length
- Return result
*/

var levelOrder = function (root) {
  if (root === null) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let length = queue.length;
    result.push(queue.map((node) => node.val));
    while (length) {
      let currNode = queue.shift();
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      length--;
    }
  }
  return result;
};
