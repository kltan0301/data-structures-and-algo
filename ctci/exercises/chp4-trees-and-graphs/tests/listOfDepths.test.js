const createLinkedList = require('../listOfDepths.js');

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe('listOfDepths', () => {
  let nodeArr = [];

  beforeEach(() => {
    //create graph
    let nodeHash = {
      5: [2, 8],
      2: [0, 3],
      8: [6, 10],
      0: [null, 1],
      3: [null, 4],
      6: [null, 7],
      10: [9, null],
      1: [null, null],
      4: [null, null],
      7: [null, null],
      9: [null, null],
    }

    for (let i = 0; i < 11; i++) {
      nodeArr.push(new TreeNode(i));
    }

    for (key in nodeHash) {
      let node = nodeArr[key];
      let adjacentArr = nodeHash[key].map((val) => { return nodeArr[val] });
      node.left = adjacentArr[0];
      node.right = adjacentArr[1];
    }
  });

  test('returns array of linked lists ', () => {
    let linkedListArray = createLinkedList(nodeArr[5]);
    expect(linkedListArray.length).toEqual(4);
  });
});
