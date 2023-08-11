/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

//Time: O(n) | Space: O(1)
var isPalindrome = function (head) {
  //Step 1: Find middle node using slow/fast pointers
  let slow = head;
  let fast = head;
  let prev = null;
  //this ensure that there enough nodes for fast/fast.next to move towards
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half of linked list
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  //Step 3: Use beginning and end pointers to check for palindrome
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
};

//////*******************************************************************///////

//Time: O(n) | Space: O(n)
var isPalindrome = function (head) {
  let arr = [];
  let curr = head;

  //copy the LL into an array
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  //2 pointers to check for palindrome
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
