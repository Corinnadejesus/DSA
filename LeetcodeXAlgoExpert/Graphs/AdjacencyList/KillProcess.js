/*
You have n processes forming a rooted tree structure. You are given two integer arrays pid and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.

Each process has only one parent process but may have multiple children processes. Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).

When a process is killed, all of its children processes will also be killed.

Given an integer kill representing the ID of a process you want to kill, return a list of the IDs of the processes that will be killed. You may return the answer in any order.

Time: O(n) | space: O(n)
Approach
  - init results array
  - Iterate through PPID with map
    - Creating adjaList to store the parents of the process nodes
      -if map has the parent node
        -get the node pid value
          - otherwise set the node as the key and its pid as the value

  - From adjList[kill] start our DFS
    - Create Helper DFS
      - create stack with kill node
      - while stack exist
      - pop curr node off stack
      - if curr node is visited continue
      - if curr node is not visited
        - mark it as visited and push into result array
        - get the neighbors from the adjacent list
        - loop through neighbors
          - if neighbors haven't been visited then push to stack

  -return results
*/

function killProcess(pid, ppid, kill) {
  let results = [];
  let adjaList = createGraph(pid, ppid);
  let visited = {};

  let stack = [kill];
  while (stack.length) {
    let currNode = stack.pop();
    if (visited[currNode]) continue;
    visited[currNode] = true;
    results.push(currNode);
    let neighbors = adjaList.get(currNode);
    if (neighbors) {
      for (let neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }

  return results;
}

function createGraph(pid, ppid) {
  let adjaList = new Map();
  for (let i = 0; i < ppid.length; i++) {
    const parent = ppid[i];
    const child = pid[i];
    if (adjaList.has(parent)) {
      let children = adjaList.get(parent);
      children.push(child);
      adjaList.set(parent, children);
    } else {
      adjaList.set(parent, [child]);
    }
  }
  return adjaList;
}
