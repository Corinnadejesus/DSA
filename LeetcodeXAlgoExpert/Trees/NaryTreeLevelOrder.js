/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

Time: O(n) | Space: O(n)
*/

var levelOrder = function (root) {
  if (root === null) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let length = queue.length;
    res.push(queue.map((node) => node.val));

    while (length) {
      let curr = queue.shift();
      //iterate over each child node to insert into queue one-by-one
      for (let child of curr.children) {
        queue.push(child);
      }
      length--;
    }
  }
  return res;
};
