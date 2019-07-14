const { partition } = require('../partition.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

function printList(listHead) {
  let currentNode = listHead;
  let arr = [];
  while (currentNode) {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return arr.toString();
}

describe('partition', () => {
  test('partitions correctly when partition is in list', () => {
    let sl = constructSll([8,9,1,5,2,3,8,10,2]);
    let sortedHeadNode = partition(sl.head, 5);
    expect(sortedHeadNode.data).toEqual(1);
    expect(printList(sortedHeadNode)).toEqual('1,2,3,2,8,9,5,8,10');
  });

  test('partitions correctly when partition is not in list', () => {
    let sl = constructSll([8, 9, 1, 5, 2, 3, 8, 10, 2]);
    let sortedHeadNode = partition(sl.head, 7);
    expect(sortedHeadNode.data).toEqual(1);
    expect(printList(sortedHeadNode)).toEqual('1,5,2,3,2,8,9,8,10');
  });

  test('partitions correctly when partition is not in list', () => {
    let sl = constructSll([8, 9, 1, 5, 2, 3, 8, 10, 2]);
    let sortedHeadNode = partition(sl.head, 10);
    expect(sortedHeadNode.data).toEqual(8);
    expect(printList(sortedHeadNode)).toEqual('8,9,1,5,2,3,8,2,10');
  });
});
