/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:

LRUCache(int capacity): Initialize the LRU cache with positive size capacity.

int get(int key): Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Approach
*/

//Map and Doubly Linked List
class LRUCache {
  constructor(capacity) {
    this.cache = {};
    this.linkedList = new DoublyLinkedList();
    this.capacity = capacity;
    this.size = 0;
  }

  get(key) {
    //if key doesn't exist, return -1
    if (!this.cache[key]) return -1;

    //if key exists, look up to node in the cache, move it to the front of the LL and return its value
    let node = this.cache[key];
    this.linkedList.moveNodeFront(node);
    return node.value;
  }

  put(key, value) {
    //if key exist, look up the node in the cache, update its value, and move to the front of the LL
    if (this.cache[key]) {
      let node = this.cache[key];
      node.value = value;
      this.linkedList.moveNodeFront(node);
      return;
    }
    //if it does not exist,
    //if at capacity, remove LRU last node from LL and cache, decrement the size by 1
    if (this.size === this.capacity) {
      const lastNode = this.linkedList.removeAndReturnLast();
      delete this.cache[lastNode.key];
      this.size -= 1;
    }

    //if below capacity, add to cache and LL, increment size
    const newNode = new ListNode(key, value);
    this.linkedList.add(newNode);
    this.cache[key] = newNode;
    this.size += 1;
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.connect(this.head, this.tail);
  }
  add(node) {
    //create connection between head and the node you want to add
    this.connect(node, this.head.next);
    this.connect(this.head, node);
  }
  moveNodeFront(node) {
    this.deleteNodes(node);
    this.add(node);
  }
  removeAndReturnLast() {
    //ensure to return node that is deleted
    const lastNode = this.tail.prev;
    this.deleteNodes(lastNode);
    return lastNode;
  }
  connect(node1, node2) {
    //creates the double link between nodes
    node1.next = node2;
    node2.prev = node1;
  }
  deleteNodes(node) {
    //deletes by removing pointer at current node
    this.connect(node.prev, node.next);
  }
}

///////////******************* ALTERNATE ***********************///////////////

//Map (keeps track of the order of how items were inserted)
//Time: O(n) | Space: O(n)
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const firstItem = this.map.keys().next().value;
      this.map.delete(firstItem);
    }
  }
}
