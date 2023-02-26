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

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-Infinity)
    //we want a reference to dummy in prev because it is going to be returned at the end
    let prev = dummy
    while(list1 && list2) {
        //checking for smallest values to start the merge
        if(list1.val <= list2.val) {
            prev.next = list1 //set to second value of list1
            prev = list1 //set to first value of list1
            list1 = list1.next //increments to get to the next value
        } else {
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
    }
    
    //in the case of difference lengths of list1 or list2
    if(list1 === null) prev.next = list2
    if(list2 === null) prev.next = list1

    return dummy.next
};

//******************* ALTERNATE (RECURSION) *************************//

var mergeTwoLists = function(list1, list2) {
    //Time: O(n + m)
    //Space: O(n + m)
    if(!list1) return list2;
    if(!list2) return list1;
    if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next)
    return list2;


};
