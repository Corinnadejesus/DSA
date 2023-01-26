/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
*/

class BrowserHistory {
  constructor(homepage) {
    this.stack = [homepage];
    this.currentPos = 0;
    this.currentPage = homepage;
  }

  // Time: O(1) | Space: O(1)
  visit(url) {
    // Check if current position is not the top of the stack
    if (this.currentPos !== this.stack.length - 1) {
      // Clear the rest of the stack up to the current position
      this.stack.slice(0, this.currentPos + 1);
    }
    // Push the new URL to the stack, update the current position
    this.stack.push(url);
    this.currentPos = this.stack.length - 1;
    this.currentPage = url;
  }

  // Time: O(1) | Space: O(1)
  back(steps) {
    // Subtract the steps from our current position
    let newPosition = this.currentPos - steps;
    // If we go out of bounds, set new position to be zero
    if (newPosition < 0) {
      newPosition = 0;
    }

    this.currentPos = newPosition;
    this.currentPage = this.stack[this.currentPos];
    return this.currentPage;
  }

  // Time: O(1) | Space: O(1)
  forward(steps) {
    // Add the steps from our current position
    let newPosition = this.currentPos + steps;
    // If we go out of bounds, set the new position to be top of stack
    if (newPosition > this.stack.length) {
      newPosition = this.stack.length - 1;
    }

    this.currentPos = newPosition;
    this.currentPage = this.stack[this.currentPos];
    return this.currentPage;
  }
}
