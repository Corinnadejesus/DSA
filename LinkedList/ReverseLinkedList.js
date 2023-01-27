/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Approach
At every iteration, the pointers shift. The previous value is being reassigned to the last known head as current and next values are incremented and the value of the previous is being returned at every iteration. When the current equals null the pointer shift for the final time before loop break.

    [1, 2, 3, 4, 5]
     c  n

    [1, 2, 3, 4, 5]
     p  c  n

    [1, 2, 3, 4, 5]
        p  c  n

    [1, 2, 3, 4, 5]
           p  c  n

    [1, 2, 3, 4, 5]
           p  c  n
                 n = null

    [1, 2, 3, 4, 5]
              p  c

    [1, 2, 3, 4, 5]
              p  c
                 c = null

    [1, 2, 3, 4, 5]
                 p

Time: O(n) | Space: (1)
*/

var reverseList = function (head) {
  //if the head is considered null, return head nothing to traverse
  if (head === null || head.next === null) return false;

  let curr = head;
  let prev = null;
  let next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
