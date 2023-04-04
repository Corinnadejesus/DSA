/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/*
Values: 1, 5, -6, 32, -15, 3
Stack for values  [1, 5, -6, 32, -15, 3]
Stack for currMin [1, 1, -6, -6, -15, -15]
Time: O(1) | Space: O(n)
*/

var MinStack = function () {
  this.stack = [];
  this.currMin = [];
};

MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push(val);
    this.currMin.push(val);
  } else {
    this.stack.push(val);
    //check last ele in currMin
    //compare it to val in stack and push smallest int in currMin
    let smallest = this.currMin[this.currMin.length - 1];
    this.currMin.push(Math.min(smallest, val));
  }
};

MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return null;
  this.currMin.pop();
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.currMin[this.currMin.length - 1];
};
