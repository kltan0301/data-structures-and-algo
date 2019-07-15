const { StackMin } = require('../stackMin.js');

describe('stackMin', () => {
  describe('push', () => {
    test('adds elements into stack correctly', () => {
      let stackMin = new StackMin();
      expect(stackMin.push(5).value).toEqual(5);
      let stackValues = stackMin.array.map((stackObject) => { return stackObject.value; })
      expect(stackValues).toEqual([5]);
    });
  });

  describe('pop', () => {
    test('removes elements from the end of the stack', () => {
      let stackMin = new StackMin();
      stackMin.push(1);
      stackMin.push(3);
      stackMin.push(2);
      stackMin.push(6);
      expect(stackMin.pop()).toEqual({ min: 1, value: 6 });
      let stackValues = stackMin.array.map((stackObject) => { return stackObject.value; })
      expect(stackValues).toEqual([1,3,2]);
    });
  });

  describe('peek', () => {
    test('returns last element in stack', () => {
      let stackMin = new StackMin();
      stackMin.push(1);
      stackMin.push(3);
      stackMin.push(2);
      stackMin.push(6);
      expect(stackMin.peek()).toEqual({ min: 1, value: 6 });
    });
  });

  describe('min', () => {
    test('returns lowest value in stack', () => {
      let stackMin = new StackMin();
      stackMin.push(5);
      stackMin.push(6);
      expect(stackMin.min()).toEqual(5);
      stackMin.push(1);
      expect(stackMin.min()).toEqual(1);
    });
  });

  describe('isEmpty', () => {
    test('returns true when array is empty', () => {
      let stackMin = new StackMin();
      expect(stackMin.isEmpty()).toEqual(true);
    });

    test('returns false when array is filled', () => {
      let stackMin = new StackMin();
      stackMin.push(5);
      stackMin.push(6);
      expect(stackMin.isEmpty()).toEqual(false);
    });
  });
});