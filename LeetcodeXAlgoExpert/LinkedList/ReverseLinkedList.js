/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Approach
At every iteration, the pointers shift. The previous value is being reassigned to the last known head as current and next values are incremented and the value of the previous is being returned at every iteration. When the current equals null the pointer shift for the final time before loop break.

Walk-Through
null | 1 -> 2 -> 3 -> 4 -> 5
p      c    n

      1 <- 2 -> 3 -> 4 -> 5
      p   c,n (break link, set current.next to prev value)

      1 <- 2 <- 3 -> 4 -> 5
           p   c,n

      1 <- 2 <- 3 <- 4 -> 5
                p   c,n

      1 <- 2 <- 3 <- 4 <- 5 -> null
                     p   c,n

      1 <- 2 <- 3 <- 4 <- 5 -> null
                          p    c,n

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
    curr.next = prev; //this breaks the link and reverses it
    prev = curr; //moves previous to the next value
    curr = next; //moves current to the next value
  }

  //at the end of our list, prev will fall at the last node in the list which has all links that was just reversed
  return prev;
};


