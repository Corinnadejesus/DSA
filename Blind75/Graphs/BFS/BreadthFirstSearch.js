
//Time: O(Vertices + Edges) | Space: O(V)
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    breadthFirstSearch(array) {
      const queue = [this]

      while(queue.length) {
        //remove the first node and mark as visited by pushing into result array
        let currNode = queue.shift()
        array.push(currNode.name)

        //for each neighbor, push the children into the queue
       currNode.children.forEach((child) => {
          queue.push(child)
        })
      }
      return array
    }
  }
