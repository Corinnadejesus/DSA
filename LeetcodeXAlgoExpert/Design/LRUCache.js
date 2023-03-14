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
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.currSize = 0;
    this.cache = {};
    this.list = new DoublyLinkedList();
  }

  // EVERY TIME A KEY IS ACCESSED OR UPDATED, IT SHOULD BE MOVED TO THE FRONT OF THE LL **
  get(key) {
    if (!(key in this.cache)) return -1;
    this.list.removeNode(this.cache[key]);
    this.list.setHead(this.cache[key]); //**
    return this.cache[key].value;
  }

  put(key, value) {
    if (!(key in this.cache)) {
      //If within capacity, set the new pair in the cache AND in LL, increment size
      const node = new Node(key, value);
      this.cache[key] = node;
      this.list.setHead(node); //**

      if (this.maxSize === this.currSize) {
        //If not within capacity, delete from LL and Cache
        const nodeToRemove = this.list.tail.prev;
        this.list.removeNode(nodeToRemove);
        delete this.cache[nodeToRemove.key];
      } else {
        this.currSize++;
      }
    } else {
      //Key exist in cache, update the value
      const node = this.cache[key];
      node.value = value;
      this.list.removeNode(node);
      this.list.setHead(node); //**
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  setHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
}

class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
    this.prev = null;
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
