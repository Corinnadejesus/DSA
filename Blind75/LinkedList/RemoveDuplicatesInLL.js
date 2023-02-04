/*
Write a function that returns a modified version of a Linked List that does'n't contain any duplicate nodes.
Linked List should be modified in-place and should have nodes sorted in respect to their values.

Example
Input: [1, 1, 3, 4, 4, 4, 5, 6, 6]
Output: [1, 3, 4, 5, 6]

Time: O(n) | Space: O(1)
*/

//Given
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  while (curr !== null) {
    let uniqueNode = curr.next;
    // if first and second value are the same Ex. [1, 1, 3]
    while (uniqueNode !== null && uniqueNode.value === curr.value) {
      //everytime we see a duplicate move the next value
      uniqueNode = uniqueNode.next;
    }
    // once we found all duplicate nodes, now we remove them by removing the pointer to them
    // [1, 1,  3]
    //  C  CN  U

    // [1, 3, 4]
    //  P  C
    curr.next = uniqueNode;
    curr = uniqueNode;
  }

  return linkedList;
}
