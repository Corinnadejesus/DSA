/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Time: O(n) to iterate over the stones + O(log n) time to get the maximums in the heap -> O(n log n)
Space: O(n)
*/

function lastStoneWeight(stones) {
    let maxHeap = new MaxPriorityQueue()

    //build maxHeap with stones
    for(let stone of stones) {
        maxHeap.enqueue(stone)
    }

    //while there are stones in the maxHeap
    while(maxHeap.size() > 1) {
        //Remove the first and second stones
        let first = maxHeap.dequeue().element
        let second = maxHeap.dequeue().element

        //if first != second then insert the difference of (first-second) into the queue
        if(first !== second) {
            maxHeap.enqueue(first-second)
        }
    }

    //if maxHeap is empty return 0 otherwise return value of the last stone
    return maxHeap.size() === 0 ? 0 : maxHeap.front().element
}
