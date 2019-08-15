// 1. isUnique: Implement an alogrithm to determine if a string has all the
// unique characters. What if you cannot use additional data structures?
const isUnique = require('../isUnique.js');

describe('isUnique', () => {
  test('returns true if string has unique characters', () => {
    let stringVar = 'badger';
    expect(isUnique(stringVar)).toEqual(true);
  });

  test('returns false if string has repeated characters', () => {
    let stringVar = 'booed';
    expect(isUnique(stringVar)).toEqual(false);
  });
});
