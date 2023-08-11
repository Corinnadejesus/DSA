/*
There is a singly-linked list head and we want to delete a node node in it. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Time: O(n) | Space: O(1)
*/

var deleteNode = function (node) {
  let ref = node.next.next; //creates a reference to 9
  node.val = node.next.val; //changes 5 to 1
  node.next = ref; //connects 1 to 9
};
