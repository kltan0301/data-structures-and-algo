const Stack = require('../../dataStructures/stack.js');
const sortStack = require('../sortStack.js');

describe('sortStack', () => {
  test('sorts stacks by descending order', () => {
    let stack = new Stack();
    [4,2,6,7,3,10,9].forEach((number) => {
      stack.push(number);
    });
    expect(sortStack(stack).data).toEqual([10, 9, 7, 6, 4, 3, 2]);
  });
});
