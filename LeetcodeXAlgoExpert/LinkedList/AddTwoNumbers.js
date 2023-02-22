/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Time: O(n) | Space: O(n)

Approach
    - Carry will hold digits after 9, set it to 0
    - Init list as dummy, set head to dummy
    - While both list has values, and carry is not 0 iterate
        - Set holder for values for list 1 and list 2 at zero
        - As long as each list is not null, set the current value in the holder and set pointer to the next value
        - Get the sum of both values and carry
        - Get the number over 9 that needs to be carried
        - Get the single digit to make the summed list
        - Create new node with the digit
        - Set the next dummy node as the digit
        - Update dummy as the current digit
    - Return head.next [0,7,0,8]
*/

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode();
  const head = dummy;
  //EC: For Carry: when the sum of both list is longer than length of either list
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
    /*
          [2,  4, 3]
          [5,  6, 4]
    Sum:  [7, 10, 7]
    Carry:[0, 1, 0]
    Digit:[7, 0, 8]
    */
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    //turning digits into linked list
    const curr = new ListNode(digit);
    dummy.next = curr;

    //updating dummy for the next iteration of nodes
    dummy = curr;
}
return head.next;
};

/*
    [0, 7]
     D  C
        DN
        D

    C = 0
    [0, 7, 0]
           C
           DN
           D

    C = 8
    [0, 7, 0, 8]
              C
              DN
              D
    */
