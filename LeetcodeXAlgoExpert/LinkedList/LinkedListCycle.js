/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail (-4) connects to the 1st node (2) (0-indexed).

Time: O(n) | Space: O(1)

Approach
  - Start slow and fast pointers at head
  - Loop until fast is null
    - Moving slow by one and fast by two
    - If fast and slow meet at any point, there is a cycle
*/

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null) {
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
