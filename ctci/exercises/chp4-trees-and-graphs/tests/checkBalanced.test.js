const isBalanced = require('../checkBalanced.js');

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function generateNodeArr(nodeHash) {
  let nodeArr = [];

  for (let i = 0; i < 11; i++) {
    nodeArr.push(new TreeNode(i));
  }

  for (key in nodeHash) {
    let node = nodeArr[key];
    let adjacentArr = nodeHash[key].map((val) => { return nodeArr[val] });
    node.left = adjacentArr[0];
    node.right = adjacentArr[1];
  }
  return nodeArr;
}

describe('isBalanced', () => {
  test('returns true when list is balanced', () => {
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
    };

    let nodeArr = generateNodeArr(nodeHash);
    expect(isBalanced(nodeArr[5])).toEqual(true);
  });

  test('returns false when list is not balanced', () => {
    let nodeHash = {
      0: [1, 2],
      1: [null, null],
      2: [4, 3],
      3: [6, 5],
      4: [7, 8],
      5: [null, null],
      6: [9, null],
      7: [null, null],
      8: [null, null],
      9: [null, 10],
      10: [null, null],
    };

    let nodeArr = generateNodeArr(nodeHash);
    expect(isBalanced(nodeArr[0])).toEqual(false);
  });
});
