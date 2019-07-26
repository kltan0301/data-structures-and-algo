class Node {
  constructor(value = null, adjacent = []) {
    this.value = value;
    this.adjacent = adjacent;
  }
  isEmpty() {
    return this.adjacent.length === 0;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  getNodes() {
    return this.nodes;
  }
}

module.exports = {
  Node,
  Graph,
};