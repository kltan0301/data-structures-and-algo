// 4. palindrome permutation: Given a string
const isPalindromePermutation = require('../isPalindromePermutation.js');

describe('isPalindromePermutation', () => {
  test('if string is a permutation of a palindrome, returns true', () => {
    let string = 'taco cat';
    expect(isPalindromePermutation(string)).toEqual(true);
  });

  test('if string is not a permutation of a palindrome, returns false', () => {
    let string = 'balloondef';
    expect(isPalindromePermutation(string)).toEqual(false);
  });
});
