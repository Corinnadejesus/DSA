/*
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Time: O(n) | Space: O(1)
*/

var deleteMiddle = function (head) {
  if (!head || !head.next) return null;
  let curr = head;
  let fast = head;
  let prev = null;

  let dummy = new ListNode(null);
  dummy = curr;

  while (fast && fast.next) {
    prev = curr;
    curr = curr.next;
    fast = fast.next.next;
  }

  prev.next = curr.next;
  return dummy;
};
