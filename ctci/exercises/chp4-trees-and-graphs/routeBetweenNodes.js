const Queue = require('../dataStructures/queue.js');

// Given a directed graph, design an algorithm to find out
// whether there is a route between two nodes.

module.exports = (graph, startNode, endNode) => {
  if (startNode === endNode) { return true; }
  let queue = new Queue();

  let nodes = graph.getNodes();
  nodes.forEach((node) => {
    node.visited = false;
  });

  queue.enqueue(startNode);
  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    debugger
    for(let i = 0; i < node.adjacent.length; i++) {
      let adjacentNode = node.adjacent[i];
      if (adjacentNode === endNode) {
        return true;
      }
      if (adjacentNode && adjacentNode.visited === false) {
        adjacentNode.visited = true;
        queue.enqueue(adjacentNode);
      }
    }
  }
  return false;
}
