// 3. urlify: Write a method to replace all spaces in a string with '%20'
const urlify = require('../urlify.js');

describe('urlify', () => {
  test('adds %20 to all spaces', () => {
    let stringVar = 'Mr John Smith      ';
    let stringLength = 13;
    expect(urlify(stringVar, stringLength)).toEqual('Mr%20John%20Smith');
  });

  test('does not add %20 if string exceeds length', () => {
    let stringVar = 'Mr John Smith blah blah blah';
    let stringLength = 13;
    expect(urlify(stringVar, stringLength)).toEqual('Mr%20John%20Smith');
  });
});
