const partition = require('../partition.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

describe('partition', () => {
  test('partiions correctly', () => {
    let sl = constructSll([8,9,1,5,2,3,8,10,2]);
    expect(partition(sl.head, 5).data).toEqual(1);
  });

});
