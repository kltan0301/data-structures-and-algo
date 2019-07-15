const { sumLists } = require('../sumLists.js');
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

describe('sumLists', () => {
  test('creates sumLists correctly when lists are of the same length', () => {
    let linkedList1 = constructSll([7,1,6]);
    let linkedList2 = constructSll([5,9,2]);
    let list = printList(sumLists(linkedList1.head, linkedList2.head));
    expect(list).toEqual('2,1,9');
  });

  test('creates sumLists correctly when one list is longer than the other', () => {
    let linkedList1 = constructSll([7,1,6,1,8]);
    let linkedList2 = constructSll([5,9,2]);
    let list = printList(sumLists(linkedList1.head, linkedList2.head));
    expect(list).toEqual('2,1,9,1,8');
  });
});

