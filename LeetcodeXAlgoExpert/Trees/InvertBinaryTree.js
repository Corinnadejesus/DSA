/*
Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Time: O(n) | Space: O(n)
*/

// DFS Recursive
function invertTree(root) {
  if (root == null) return root;
  //take the next left and right node, and recursively swap the children
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS Iterative
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const nextNode = stack.pop();
    if (nextNode != null) {
      [nextNode.left, nextNode.right] = [nextNode.right, nextNode.left];
      stack.push(nextNode.left, nextNode.right);
    }
  }

  return root; //[4,2]
}

// BFS Iterative
function invertTree(root) {
  const queue = [root];
  while (queue.length) {
    const nextNode = queue.shift();
    if (nextNode != null) {
      //swap children
      [nextNode.left, nextNode.right] = [nextNode.right, nextNode.left];
      //push swapped values back into queue
      queue.push(nextNode.left, nextNode.right);
    }
  }

  return root;
}
