/*


Time: O(n * log n)
    - log n from from popping values off based on k (n) size of the heap
Space: O(n)
*/

var KthLargest = function (k, nums) {
  this.k = k;
  this.minpq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    if (this.minpq.size() < k) {
      this.minpq.enqueue(nums[i]);
    } else if (
      this.minpq.size() === k &&
      nums[i] >= this.minpq.front().element
    ) {
      this.minpq.enqueue(nums[i]);
      this.minpq.dequeue();
    }
  }
};

KthLargest.prototype.add = function (val) {
  if (this.minpq.size() < this.k) {
    this.minpq.enqueue(val);
  } else if (val > this.minpq.front().element) {
    this.minpq.enqueue(val);
    this.minpq.dequeue();
  }
  return this.minpq.front().element;
};

/* ALTERNATE */

var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = nums.sort((a, b) => a - b);
};

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
