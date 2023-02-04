/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Time: O(n) | Space: O(n)

Approach
    - Init our result linked list dummy and carry
    - Loop over entirety of both lists
        - As long as each has values to iterate, get current value while pointing to the next value
        - Sum current value by the carry
        - Get the number that is carried
        - Set new digit with carried number
        - Formulate linked list with digits at every iteration [dummy, digits]
*/

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode();
  const head = dummy;
  //EC: when the sum is longer than length of either list
  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = 0;
    let val2 = 0;
    //EC: if l1 or l2 are diff lengths
    if (l1 !== null) {
      val1 = l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      val2 = l2.val;
      l2 = l2.next;
    }

    //EC: when sum of values are over 9, digit needs to be carried
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    //turning digits into linked list
    const curr = new ListNode(digit);
    dummy.next = curr;

    //updating dummy for the next iteration of nodes
    dummy = curr;
    /*
        [0, 7]
         D  C
            DN
            D

        C = 0
        [0, 7, 0,]
               C
               DN
               D

        C = 8
        [0, 7, 0, 8]
                  C
                  DN
                  D
        */
  }
  return head.next;
};
