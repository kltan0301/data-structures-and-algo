
const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('constructor', () => {
    test('instantiates the stack correctly', () => {
      expect(stack.data).toStrictEqual([]);
    });
  });

  describe('pop', () => {
    test('if stack is empty', () => {
      expect(stack.pop()).toEqual(false);
    });

    test('if stack is not empty', () => {
      stack.data = [1,2,3,4,5];
      expect(stack.pop()).toEqual(5);
      expect(stack.data).toEqual([1,2,3,4]);
    });
  });

  describe('push', () => {
    test('adds elements to the end of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.data).toEqual([1,2,3]);
    });
  });

  describe('peek', () => {
    test('returns last element without changing stack', () => {
      stack.data = [1,2,3]
      expect(stack.peek()).toEqual(3);
      expect(stack.data).toEqual([1,2,3]);
    });
  });

  describe('isEmpty()', () => {
    test('returns true when stack is empty', () => {
      expect(stack.isEmpty()).toEqual(true);
    });

    test('returns false when stack is not empty', () => {
      stack.data = [1,2,3,4];
      expect(stack.isEmpty()).toEqual(false);
    });
  });
});
