/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
Example:
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

Time: O(1) -> retrieval of a top item in heap | Space: O(1)
*/

var MedianFinder = function () {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

MedianFinder.prototype.addNum = function (num) {
  //add to min
  this.minHeap.enqueue(num);

  // pop the top for max to keep them in the order that we want
  let topValue = this.minHeap.dequeue().element;
  this.maxHeap.enqueue(topValue);

  //balance the heaps
  if (this.minHeap.size() < this.maxHeap.size()) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  }
};

MedianFinder.prototype.findMedian = function () {
  //if min heap has more values than the max heap, pop the top most value from min heap
  if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.front().element;
  } else {
    //otherwise add the top most values of min and max heap and divide by 2 to get average
    return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
  }
};

////////////////////////* ALTERNATE *///////////////////////////

//Binary Search Approach -> Time: O(log n) | Space: O(1)
var MedianFinder = function () {
  this.arr = [];
};

MedianFinder.prototype.addNum = function (num) {
  const bs = (n) => {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }
    this.arr.splice(start, 0, n);
  };
  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
};

MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  return this.arr.length % 2 === 0
    ? (this.arr[mid - 1] + this.arr[mid]) / 2
    : this.arr[mid];
};
