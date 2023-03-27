/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Properties
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null; }

Time: O(n) | Space: O(n)

Approach (DFS Pre-Order)
Serialize (Flatten tree to string)
    - Create Helper DFS function
        - Add Null nodes to result array
        - Convert number nodes to string then add to result, recurse left/right sides
    - Joined result into string with commas
    - Call DFS on Root

Deserialize (Transform string into tree)
    - Split input into array, Set index pointer at 0
    - Create dfs
        - If element at index is null increment pointer and return null
        - Otherwise create a new node with that element and turn it into a number
        - Increment pointer
        - Call DFS on left and right
        - Return node
    - Return output of dfs
*/

var serialize = function (root) {
  let res = [];

  function dfs(node) {
    if (!node) {
      res.push("Null");
      return;
    }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res.join(",");
};

var deserialize = function (data) {
  let vals = data.split(",");
  let pt = 0;

  function dfs() {
    if (vals[pt] === "Null") {
      pt++;
      return null;
    }

    let node = new TreeNode(Number(vals[pt]));
    pt++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
};
