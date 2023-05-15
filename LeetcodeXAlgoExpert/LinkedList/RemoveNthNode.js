/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Time: O(n) | Space: O(1)

Approach
  - Init pointers (Dummy, Prev, RemoveNode, Tail)
  - Loop from counter to n (to get Tail to point one position before n)
  - Loop from Tail to null
    - Advance tail, prev, and removedNode
    - Once tail reaches null, removedNode will point to node to be removed
  - Break the link and point 3 to 5

  
  VISUAL WALKTHROUGH
            n
 [0,1, 2, 3,4,5] (Tail starts at head, and it is incremented n times. RN at 1, T at 3, P at 0)
  D T  T  T
  P RN

 [0,1, 2, 3, 4, 5] (Tail, Prev, and RemovedNode all Advance until Tail is at null)
  D          T
    P RN

 [0,1, 2, 3, 4, 5, null]
  D             T
       P RN

 [0,1, 2, 3, 4, 5, null] (When Tail get to end of list, RN is pointing to the nth node at the end of the list to remove)
  D                T
          P RN

*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);

  //append dummy to linked list
  dummy.next = head;
  let removedNode = head;
  let prev = dummy;
  let tail = head;
  let count = 0;

  //this increments the tail up to the point of n
  while (count < n) {
    count++;
    tail = tail.next;
  }

  //increment tail to the end of the list
  while (tail) {
    tail = tail.next;
    removedNode = removedNode.next;
    prev = prev.next;
  }

  prev.next = removedNode.next;
  return dummy.next;
};
