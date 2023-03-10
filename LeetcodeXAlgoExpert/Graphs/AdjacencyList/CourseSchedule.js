/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Time: O(v + e) | Space: O(v)
*/

var canFinish = function (numCourses, prerequisites) {
  let adjaList = {};
  let visited = new Set();

  for (let [vertex, edge] of prerequisites) {
    if (!adjaList[vertex]) {
      adjaList[vertex] = [edge];
    } else {
      adjaList[vertex].push(edge);
    }
  }

  function dfs(currNode) {
    if (visited.has(currNode)) return false;
    if (adjaList[currNode] === []) return true;

    visited.add(currNode);

    if (adjaList[currNode]) {
      for (let neighbors of adjaList[currNode]) {
        console.log(neighbors);
        if (!dfs(neighbors)) return false;
      }
    }

    visited.delete(currNode);
    adjaList[currNode] = [];
    return true;
  }

  for (let key in adjaList) {
    if (!dfs(key)) {
      return false;
    }
  }
  return true;
};
