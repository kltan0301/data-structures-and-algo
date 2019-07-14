const deleteMiddleNode = require('../deleteMiddleNode.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

describe('deleteMiddleNode', () => {
  test('deletes middle node correctly', () => {
    let sl = constructSll([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let node = sl.head.next.next;
    expect(node.data).toEqual(3);
    expect(deleteMiddleNode(node)).toEqual(true);
    expect(sl.printList()).toEqual([1,2,4,5,6,7,8,9]);
  });

  test('returns false if list is empty', () => {
    let sl = constructSll([]);
    expect(deleteMiddleNode(sl.head)).toEqual(false);
  });
});
