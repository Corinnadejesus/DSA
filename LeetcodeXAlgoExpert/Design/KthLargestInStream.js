/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Implement KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

Example:
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4 => [3, 4, 5, 8, 2]

Space: O(n)
*/

//Time: O(n * log n) -> log n from popping values off based on k (n) size of the heap
var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    if (this.minHeap.size() < k) {
      //add values to the queue as long as the size is less than k
      this.minHeap.enqueue(nums[i]);
    } else if (
      this.minHeap.size() === k &&
      nums[i] >= this.minHeap.front().element
    ) {
      //remove the smallest elements that appear at the front of heap until it equals the size of k
      this.minHeap.enqueue(nums[i]);
      this.minHeap.dequeue();
    }
  }
};

//Time: O(n * log k) -> log n from adding and removing values of the heap based on (n) number of function calls to add()
KthLargest.prototype.add = function (val) {
  if (this.minHeap.size() < this.k) {
    this.minHeap.enqueue(val);
  } else if (val > this.minHeap.front().element) {
    this.minHeap.enqueue(val);
    this.minHeap.dequeue();
  }
  return this.minHeap.front().element;
};

////////////////////////* ALTERNATE */////////////////////////////////////

//Time: O(n * log n) | Space: O(n)
var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = nums.sort((a, b) => a - b);
};

//Time: O(log n) -> Binary Search | Space: O(1)
KthLargest.prototype.add = function (val) {
  const insert = () => {
    let l = 0,
      r = this.arr.length - 1;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (this.arr[mid] === val) return mid;
      if (this.arr[mid] < val) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  };
  const index = insert();
  this.arr.splice(index, 0, val);
  return this.arr[this.arr.length - this.k];
};
