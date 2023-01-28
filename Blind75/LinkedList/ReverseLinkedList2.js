/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
*/

var reverseBetween = function (head, left, right) {
  let current = head,
    start = head,
    position = 1;

  while (position < left) {
    start = current;
    current = current.next;
    position++;
  }

  let reversedList = null,
    tail = current;

  while (position >= left && position <= right) {
    const next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    position++;
  }
  start.next = reversedList;
  tail.next = current;

  return left > 1 ? head : reversedList;
};
