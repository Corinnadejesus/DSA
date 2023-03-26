/*
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

Time: O(n) | Space: O(n)

Approach
    - Return early if head or head next is null
    - Set dummy node, then set prev as null
    - Init stack with the head
    - While stack has length
       - Pop curr node off stack and link prev node to curr node
       - If curr has next add to stack
       - If curr has child add to stack then REMOVE the pointers
       - Point prev to curr
    - Return dummy.next
*/

//DFS Iterative
var flatten = function (head) {
  if (!head) return null;
  let dummy = new Node(0, null, head, null);

  let stack = [head];
  let curr = dummy;
  let prev = null;

  while (stack.length) {
    curr = stack.pop();

    if (prev) {
      curr.prev = prev;
      prev.next = curr;
    }

    if (curr.next !== null) stack.push(curr.next);
    if (curr.child !== null) {
      stack.push(curr.child);
      curr.child = null;
    }

    prev = curr;
  }

  return dummy.next;
};

///////////////////******************* ALTERNATIVE ********************//////////////////////

//DFS Recursive
var flatten = function (head) {
  const arr = [];

  const dfs = (node) => {
    if (!node) return;
    arr.push(node);
    dfs(node.child);
    dfs(node.next);
  };
  dfs(head);

  for (let i = 0; i < arr.length; i++) {
    arr[i].prev = arr[i - 1] || null;
    arr[i].next = arr[i + 1] || null;
    arr[i].child = null;
  }

  return arr[0] || null;
};
