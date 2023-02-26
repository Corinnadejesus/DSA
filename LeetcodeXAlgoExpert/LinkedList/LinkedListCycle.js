/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Time: O(n) | Space: O(1)
Approach
Init slow pointer at head
Init fast pointer at head
Iterate while fast is not null
    if fast pointer's next value is null value return false
    move slow pointer forward by one
    move fast pointer forward by two
    check if slow and fast are equal, if they are we have a cycle return true
Otherwise we dont and return false
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
