/*
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4,5,6]
Output: [1,6,2,5,3,4]

Time: O(n) | Space: O(1)

Approach: Fast and Slow Pointers
- Find the Middle Node (slow pointer by 1, fast pointer by 2 until end of list)
        -Once the fast pointer reaches end of list, Slow pointer will point to the middle node
- Reverse second half of the list
- Merge both portions of list together
*/

var reorderList = function (head) {
  if (head == null) return;

  // find the middle of linked list, if there are two middle nodes choose the second
  // in 1->2->3->4->5->6 find 4
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half in-place
  // 1->2->3->4->5->6 into 1->2->3 and 6->5->4
  let prev = null,
    curr = slow;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // merge 1->2->3 and 6->5->4 into 1->6->2->5->3->4
  let first = head,
    second = prev;

  while (second.next != null) {
    let temp1 = first.next,
      temp2 = second.next;
    first.next = second;
    first = temp1;
    second.next = temp1;
    second = temp2;
  }
  return head;
};
