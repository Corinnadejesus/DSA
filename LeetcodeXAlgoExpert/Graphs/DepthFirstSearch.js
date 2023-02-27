
//Time: O(Vertices + Edges) | Space: O(V)
class Node {
    constructor(name) {
      this.name = name;

      //array is created to hold results
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    depthFirstSearch(array) {
      array.push(this.name)
      for(const child of this.children) {
        //For each neighbor of vertex recursively call DFS on unvisited neighbor
        child.depthFirstSearch(array)
      }
      return array
    }
  }
