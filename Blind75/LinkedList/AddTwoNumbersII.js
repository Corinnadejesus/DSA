/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Time: O(n) | Space: O(1)

Approach: Stack
    - Add Nodes to Stack
    - Sum values that are Removed from Stack
    - Get each digit you need
    - Start result List with digit
    - Set carried digit as head
    - Add digit in result List to head
*/

var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let sumList = new ListNode(0);
  while (stack1.length || stack2.length) {
    let sum = 0;
    //pop the first value of each stack and sum them
    if (stack1.length) sum += stack1.pop();
    if (stack2.length) sum += stack2.pop();
    sum += sumList.val;

    //mod the sum by 10 to get the digit we need
    // 7,807 % 10 = 7
    // 780 % 10 = 0
    // 78 % 10 = 8
    // 7 % 10 = 7
    let digit = sum % 10;

    //add the digit to the sumList
    sumList.val = digit;

    //get the valued carried over for number over 9
    let carry = Math.floor(sum / 10);

    //set carried value as head
    let head = new ListNode(carry);

    //set head.next as the value in the sumList (digit)
    head.next = sumList;
    //and set the new head as the value in the sumList
    sumList = head;
  }

  //[0, 7, 8, 0 ,7] return sumList.next because first node is 0
  return sumList.val === 0 ? sumList.next : sumList;
};
