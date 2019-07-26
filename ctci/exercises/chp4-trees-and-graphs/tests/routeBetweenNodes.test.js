const search = require('../routeBetweenNodes.js');
const { Node, Graph } = require('../../dataStructures/graph.js');

describe('routeBetweenNodes', () => {
  let graph;
  let nodeArr = [];

  beforeEach(() => {
    let hash = {
      0: [1,2],
      1: [3,6],
      2: [3,5,7],
      3: [4],
      4: [5],
      5: [],
      6: [],
      7: []
    };

    for (let k in hash) {
      nodeArr.push(new Node(k))
    }

    for (let k in hash) {
      let adjacentArr = hash[k].map((val) => { return nodeArr[val]});
      nodeArr[k].adjacent = adjacentArr;
    }

    graph = new Graph();
    graph.nodes = nodeArr;
  });

  test('returns true if there is a path between 2 nodes', () => {
    let startNode = nodeArr[0];
    let endNode = nodeArr[5];
    expect(search(graph, startNode, endNode)).toEqual(true);
  });

  test('returns true if there is no path between 2 nodes', () => {
    let startNode = nodeArr[3];
    let endNode = nodeArr[7];
    expect(search(graph, startNode, endNode)).toEqual(false);
  });
});