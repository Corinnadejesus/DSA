/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = [0]
Output: [0]

Time: O(n + m) where list1 (n) and list2 (m)
Space: O(1) because of simple pointers shift, not creating anything that will scale as input gets larger
*/

var mergeTwoLists = function (l1, l2) {
  let temp = new ListNode(null);
  let curr = temp;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1; //set second val to l1
      l1 = l1.next; //increment to the next value
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1) {
    curr.next = l1;
  } else {
    curr.next = l2;
  }

  return temp.next;
};

//******************* ALTERNATE (RECURSION) *************************//

var mergeTwoLists = function (list1, list2) {
  //Time: O(n + m)
  //Space: O(n + m)
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};
