/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Time: O(n) | Space: O(1)
*/

var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while (curr !== null) {
    if (curr.val === val) {
      /* [1, 2, 6,  3, 4, 5, 6]
             P  C  CN

           [1, 2,  3,  4, 5, 6]
               P  PN   C  CN
           the C pointer from 6 is removed because its equals the val
           the prev.next becomes the new pointer at 6 and 3 becomes new prev.next after 6 is removed
           C pointer is not set to the next value of 4
        */
      prev.next = curr.next;
      curr = curr.next; //increment current
    } else {
      prev = curr; //increment previous
      curr = curr.next; //increment current
    }
  }
  return dummy.next;
};
