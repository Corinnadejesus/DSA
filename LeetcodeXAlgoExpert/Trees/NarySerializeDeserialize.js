/*
Design an algorithm to serialize an N-ary tree to a string and deserialize an N-ary tree to the original tree structure. An N-ary tree is a rooted tree in which each node has no more than N children.

Time: O(n) | Space: O(n)
*/

// Encodes a tree to a single string.
serialize = function (root) {
  const res = [];
  dfs(root);

  return res.join(",");

  function dfs(root) {
    if (!root) return;

    res.push(root.val);
    res.push(root.children.length || 0);
    for (const child of root.children) dfs(child);
  }
};

// Decodes your encoded data to tree.
deserialize = function (data) {
  if (!data) return;
  const root = data.split(",");

  let i = 0;
  return dfs(root);

  function dfs(data) {
    if (!data.length) return;

    const val = data[i++];
    const len = Number(data[i++]);
    const children = [];

    for (let k = 0; k < len; k++) children.push(dfs(data));

    return new Node(+val, children);
  }
};
