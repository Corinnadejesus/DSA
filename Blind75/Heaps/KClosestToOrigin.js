/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Time: O(n * log n) | Space: O(n)
*/

var kClosest = function (points, k) {
  function distance(x, y) {
    return x * x + y * y;
  }

  let MinHeap = new MinPriorityQueue({
    compare: function (a, b) {
      return distance(a[0], a[1]) - distance(b[0], b[1]);
    },
  });

  for (let point of points) {
    MinHeap.enqueue(point);
  }

  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(MinHeap.dequeue());
  }

  return ans;
};

//////////////////* ALTERNATE *//////////////////////////

// O(log n) for binary searching * O(n) for looping = O(n log n)
var kClosest = function(points, k) {
    const arr = [];
    const calc = (p) => p[0] * p[0] + p[1] * p[1];
    const bin = (val) => {
        let low = 0;
        let high = arr.length;
        while (low < high) {
            let mid = (low + high) >> 1;
            if (val > calc(arr[mid])) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    for (let p of points) {
        arr.splice(bin(calc(p)), 0, p);
    }
    return arr.splice(0, k);
};
