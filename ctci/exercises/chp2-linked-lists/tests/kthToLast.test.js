const { kthToLast } = require('../kthToLast.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

describe('kthToLast', () => {
  test('returns kth element to last correctly', () => {
    let sl = constructSll([1,2,3,4,5,6,7,8,9]);
    expect(kthToLast(sl.head,3)).toEqual(7);
  });

  test('throws error if index greater than length', () => {
    let sl = constructSll([1,2,3]);
    expect(() => {
      kthToLast(sl.head, 10);
    }).toThrowError('Exceeds list length');
  });

  test('throws error if list is empty', () => {
    let sl = constructSll([]);
    expect(() => {
      kthToLast(sl.head, 10);
    }).toThrowError('List is empty');
  });
});
