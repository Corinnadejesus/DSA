/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

Time: O(n) | Space: O(1)
*/

var isPalindrome = function(head) {
    let arr = []
    let curr = head

    //copy the LL into an array
    while(curr) {
      arr.push(curr.val)
      curr = curr.next
    }

    //2 pointers to check for palindrome
    let left = 0
    let right = arr.length - 1

    while(left < right) {
      if(arr[left] !== arr[right]) {
        return false
      }

      left++
      right--
    }

    return true
  };
