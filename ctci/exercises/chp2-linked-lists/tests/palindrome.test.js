const palindrome = require('../palindrome.js');
const { constructSll } = require('../../dataStructures/helpers/dataStructureConstructor');

describe('palindrome', () => {
  test('returns false if linked list is not a palindrome', () => {
    let linkedList1 = constructSll([7, 1, 6, 5, 4]);
    let list = palindrome(linkedList1.head);
    expect(list).toEqual(false);
  });

  test('returns true if linked list is a palindrome', () => {
    let linkedList1 = constructSll([1, 1, 2, 1, 1]);
    let list = palindrome(linkedList1.head);
    expect(list).toEqual(true);
  });
});