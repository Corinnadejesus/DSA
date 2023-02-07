/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Time: O(n) | Space: O(1)

Approach
  - Find
    - starting point, position to start your loop, and current nodes at proper places
    - set list to hold your reversals
    - set tail as a left position node

  - Reverse
    - While the position points towards the node you want to reverse, swap them to reverse and continue pointer

  - Merge
    - set your start, the reversed elements, then your tail
*/

var reverseBetween = function (head, left, right) {
  let current = head;
  let start = head;
  position = 1;


  while (position < left) {
    start = current; //set start at 1, the node prior to where reversal starts
    current = current.next; //set current at 2
    position++;
  }

  let reversedList = null;
  //set a tail pointer to point to beginning of reversed list
  let tail = current;

  //  Position 2 === left(2) && Position 2 < right(4)
  while (position >= left && position <= right) {
    //Reverse the middle elements (2, 3, 4) to (4, 3, 2)
    const temp = current.next;
    current.next = reversedList;
    reversedList = current;
    current = temp; //5
    position++;
  }

  //2           //4,3,2
  start.next = reversedList;
  //2           //5
  tail.next = current;

  // if left is equaled to 1 there is no start value set (so return the head as the start)
  return left > 1 ? head : reversedList;
};
