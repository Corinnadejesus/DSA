/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

space: O(1) | time: O(n)
*/

var maxArea = function(height) {
    //init left pointer beginning
    let left = 0
    //init right pointer end
    let right = height.length - 1
    //init area
    let area = 0

    //while left pointer is a lower height than the right
    while(left < right) {
        //set the area temporarily
        const width = right - left
        const length = Math.min(height[left], height[right])
        const tempArea = width * length

        //getting the maximum value of the temporary area and the actual area
        area = Math.max(area, tempArea)

        //if left height is lower than right height
        if(height[left] < height[right]) {
            // increment to move the left pointer forward
            left++
        } else {
            //decrement to move the right pointer backwards
            right--
        }
    }
        return area
};
