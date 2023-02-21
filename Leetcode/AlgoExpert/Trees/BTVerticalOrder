/*
Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
If two nodes are in the same row and column, the order should be from left to right.

Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

Time: O(n) | Space: O(n)
*/
//BFS
var verticalOrder = function (root) {
    if(!root) return []
    let queue = [[root, 0]]
    let map = {}
    while(queue.length) {
        //level is at position of the root
        const [node, level] = queue.shift()
        if(!map[level]) {
            //if node is not in map set as its value
            map[level] = [node.val]
        } else {
            //otherwise push node value into its level
           map[level].push(node.val)
        }

        //push the node into the queue
        //if moving to the left, level - 1
        if(node.left) queue.push([node.left, level - 1])
        //if moving to the right, level + 1
        if(node.right) queue.push([node.right, level + 1])
    }

    //order the map by its keys and return the values
    return Object.keys(map).sort((a,b) => a-b).map(k => map[k])
};
