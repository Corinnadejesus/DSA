/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false
*/

//Recursive
//Time: O(n) | Space: O(1)
var isSameTree = function (p, q) {
  //base cases
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};

//BFS
//Time: O(n) | Space: O(n)
var isSameTree = function (p, q) {
  const stack = [p, q];
  while (stack.length) {
    n2 = stack.pop();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    stack.push(n1.left, n2.left, n1.right, n2.right);
  }
  return true;
};
