/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Input: root = [1,null,2,3]
Output: [1,3,2]

Time: O(n) | Space: O(n)
*/

var inorderTraversal = function (root) {
  let result = [];

  // The call stack, which we can return to the parent node and decide if there is something to do left
  let stack = [];
  // The pointer on the current node
  let currentNode = root;

  while (currentNode || stack.length) {
    // this loop is going down the left nodes and exits if there is no left node anymore. Also adds all nodes to Stack
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      // finishing the above loop, it means we are at the deepest left node we could get and all ar added, so now we need to point the currentNode to the parentNode. We do this by popping the last item in our callstack, which was the parentNode. pop returns the last item, currentNode is now the last Item (Parent)
      currentNode = stack.pop();
      // We add currentNode to the result, because inorder traversal is ""left-root-right"-order", so we always add the most left node which is left (and has no left children)
      result.push(currentNode.val);
      // then we point the pointer to the right node (even if its null)
      currentNode = currentNode.right;

      // After we were at the deepest left, a new outer while loop is started, where is checked if currentNode exists, if yes, add to stack, move left. if not, set currentNode/pointer to parent, push it to result and set to right child node.
    }
  }

  return result;
};
