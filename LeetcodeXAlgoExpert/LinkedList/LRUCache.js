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
