class Queue {
  constructor(nodes = []) {
    this.nodes = nodes;
  }

  enqueue(node) {
    this.nodes.push(node);
  }

  dequeue() {
    if (this.isEmpty()) { return false; }
    return this.nodes.shift();
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

module.exports = Queue;