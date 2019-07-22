const { SetOfStacks } = require('../setOfStacks.js');

describe('stackOfPlates', () => {
  describe('constructor', () => {
    test('creates stackOfPlates correctly', () => {
      let height = 5;
      let setOfStacks = new SetOfStacks(height);
      expect(setOfStacks.maxHeight).toEqual(height);
      expect(setOfStacks.stacks).toEqual([]);
    });
  });

  describe('push', () => {
    test('adds elements into last stack correctly', () => {
      let height = 10;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(6);
      setOfStacks.push(5)
      expect(setOfStacks.stacks).toEqual([[2,20,13,6,5]]);
    });

    test('creates new stack to add new element if stack is already filled', () => {
      let height = 3;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      expect(setOfStacks.stacks).toEqual([[2,20,13]]);
      setOfStacks.push(6);
      expect(setOfStacks.stacks).toEqual([[2,20,13],[6]]);
    });
  });

  describe('pop', () => {
    test('returns false if stack is empty', () => {
      let height = 3;
      let setOfStacks = new SetOfStacks(height);
      expect(setOfStacks.pop()).toEqual(false);
    });

    test('removes topmost element of last stack', () => {
      let height = 4;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      setOfStacks.push(13);
      expect(setOfStacks.pop()).toEqual(13);
      expect(setOfStacks.stacks).toEqual([[2,20,13,1],[20]]);
    });

    test('removes stack if element is last in stack', () => {
      let height = 4;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      expect(setOfStacks.pop()).toEqual(20);
      expect(setOfStacks.stacks).toEqual([[2,20,13,1]]);
    });
  });

  describe('popAt', () => {
    test('returns false if stack at index is not found', () => {
      let height = 4;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      setOfStacks.push(13);
      expect(setOfStacks.popAt(10)).toEqual(false);
    });

    test('removes last element of the stack at the index', () => {
      let height = 3;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(5);
      setOfStacks.push(4);
      setOfStacks.push(7);
      expect(setOfStacks.popAt(1)).toEqual(13);
      expect(setOfStacks.stacks).toEqual([[2,20,13],[1,20],[5,4,7]]);
    });
  });

  describe('popAndRollover', () => {
    test('returns false if stack at index is not found', () => {
      let height = 4;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      setOfStacks.push(13);
      expect(setOfStacks.popAt(10)).toEqual(false);
    });

    test('removes last element of the stack at the index', () => {
      let height = 3;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(1);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(5);
      setOfStacks.push(4);
      setOfStacks.push(7);
      expect(setOfStacks.popAndRollover(1)).toEqual(13);
      expect(setOfStacks.stacks).toEqual([[2,20,13],[1,20,5],[4,7]]);
    });

    test('removes stack if it is the last element', () => {
      let height = 3;
      let setOfStacks = new SetOfStacks(height);
      setOfStacks.push(2);
      setOfStacks.push(20);
      setOfStacks.push(13);
      setOfStacks.push(8);
      setOfStacks.push(12);
      setOfStacks.push(1);
      setOfStacks.push(5);
      expect(setOfStacks.popAndRollover(0)).toEqual(13);
      expect(setOfStacks.stacks).toEqual([[2,20,8],[12,1,5]]);
    });
  });
});
