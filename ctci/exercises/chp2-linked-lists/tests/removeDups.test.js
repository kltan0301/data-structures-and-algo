const { removeDups } = require('../removeDups.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

describe('removeDups', () => {
  test('remove duplicate values', () => {
    let sl = constructSll([3, 2, 2, 1, 1, 4, 5, 5, 5]);
    expect(removeDups(sl).sort()).toEqual([1,2,3,4,5]);
  });

  test('returns original array if no duplicates', () => {
    let sl = constructSll([3,6,1,2]);
    expect(removeDups(sl).sort()).toEqual([1,2,3,6]);
  });
});
