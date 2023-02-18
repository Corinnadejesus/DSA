/*
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.
It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.
If the task is impossible, return -1.

Examples:
input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011

Time: O(r * c) | Space: O(r * c) -> the space to store the queue and seen

Approach
    - Finding a shortest path is typically done with a breadth first search. Here, nodes are locations on the grid with value 1, and two nodes are neighbors if they are 4-directionally adjacent.

    - The breadth first search algorithm is given a source in the graph, and it explores all nodes distance 0 from the source, then all nodes distance 1, then all nodes distance 2, and so on. The algorithm records the node’s distance when it visits, and that way we can determine the shortest path in the graph to some target node.

    - By visiting nodes in order from distance to the source, this ensures that if we find the target word, we found it at the least possible distance and thus the answer is correct.
*/

// function shortestCellPath(grid, sr, sc, tr, tc) {
//     let queue = [sr, sc, 0]
//     queue.add((sr, sc, 0))
//     let seen = new Map()
//     seen.add((sr, sc))

//     while (queue !== null) {
//         r, c, depth = queue.popfront()
//         if r == tr and c == tc: return depth
//         for (nr, nc) in ((r-1, c), (r+1, c), (r, c-1), (r, c+1)):
//             if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1 and (nr, nc) not in seen:
//                 queue.append((nr, nc, depth + 1))
//                 seen.add((nr, nc))
//     }
//     return -1
// }

function shortestCellPath(grid, sr, sc, tr, tc) {
    let queue = [sr, sc, 0]
    let map = new Map()
    map.add((sr, sc))

    while(queue !== null) {
        let [row, col, depth] = queue.shift()
        if(row === tr && col === tc) return depth
        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]
        for(let [currentRow, currentCol] of directions) {
            if(0 <= currentRow && 0 <= currentCol && grid[currentRow][currentCol] === 1 && !(map.has([currentRow, currentCol]))) {
                queue.push([currentRow, currentCol, depth + 1])
                map.add([currentRow, currentCol])
            }
        }
    }
    return -1
}
