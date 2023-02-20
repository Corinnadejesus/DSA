/*
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,(8,7),3,0,9,5]

Time: O(n) | Space: O(1)

Approach
    - Find Front at kth node
        - loop through, increment count to get length of list, when count equals k, we found kth node
    - Find End
        - set end to head, iterate current until end of linked list
        - when curr === null the end node has been found

         B
[7,9,6,6,7,8,3,0,9,5]
           E       C
*/
var swapNodes = function (head, k) {
  let curr = head;
  let count = 0;
  let kBegin = null;
  let kEnd = null;
  while (curr !== null) {
    count++;

    //this means the Kth node from the beginning has been found
    if (kEnd !== null) {
      //look for Kth node from the end now
      kEnd = kEnd.next;
    }

    //curr is pointing to the Kth node from the beginning
    if (count === k) {
      kBegin = curr;
      kEnd = head;
    }

    //move curr to the next node
    curr = curr.next;
  }

  //We now have Front and End nodes, time to swap them
  let temp = kBegin.val;
  kBegin.val = kEnd.val;
  kEnd.val = temp;

  return head;
};
