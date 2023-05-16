/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Time: O(n) | Space: O(1)
*/

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    let one = head;
    let two = head.next;

    prev.next = two;
    one.next = two.next;
    two.next = one;

    prev = one;
    head = one.next;
  }

  return dummy.next;
};
