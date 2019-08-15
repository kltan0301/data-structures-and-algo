// 2. checkPermutation: Given 2 strings, write a method
// to decide if one is a permutation of the other
const checkPermutation = require('../checkPermutation.js');

describe('checkPermutation', () => {
  describe('returns true if', () => {
    test('returns true if strings are permutations of one another', () => {
      let string1 = 'rat';
      let string2 = 'tar';
      expect(checkPermutation(string1, string2)).toEqual(true);
    });

    test('returns true if strings are the same word', () => {
      let string1 = 'tyrannosaurus';
      let string2 = 'tyrannosaurus';
      expect(checkPermutation(string1, string2)).toEqual(true);
    });
  });

  describe('returns false if', () => {
    test('they are of different length', () => {
      let string1 = 'stegosaurus';
      let string2 = 't-rex';
      expect(checkPermutation(string1, string2)).toEqual(false);
    });

    test('they are of the same length but not permutations of each other', () => {
      let string1 = 'seed';
      let string2 = 'read';
      expect(checkPermutation(string1, string2)).toEqual(false);
    });

    test('are permutations or have a different number of spaces', () => {
      let string1 = 'a b c d e f';
      let string2 = 'abcdef';
      expect(checkPermutation(string1, string2)).toEqual(false);
    });
  });
});
