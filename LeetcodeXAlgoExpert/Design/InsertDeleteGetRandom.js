/*
Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise
Removes an item val from the set if present. Returns true if the item was present, false otherwise.
getRandom returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.
*/

var RandomizedSet = function () {
  this.list = [];
  this.map = new Map(); //instead of {}, so we could use methods associated with it.
};

RandomizedSet.prototype.insert = function (val) {
  //check if val is contained in the map, if so return false
  if (this.map.has(val)) return false;

  //set the val and its index in the map
  const index = this.list.length;
  this.map.set(val, index); //{1: 0, 2: 1}

  //insert the val into the array and return true
  this.list.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  //check if val is NOT contained in the map, if so return false
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);

  //swaps the val we need to remove to the end
  this.swap(idx, this.list.length - 1);
  this.list.pop();

  //update map after last element removed
  this.map.set(this.list[idx], idx);

  this.map.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  // choose a random index and then to retrieve an element with that index
  // build a list of keys aside and to use this list to compute GetRandom in constant time

  return this.list[Math.floor(Math.random() * this.list.length)];
};

RandomizedSet.prototype.swap = function (a, b) {
  const temp = this.list[a];
  this.list[a] = this.list[b];
  this.list[b] = temp;
};
