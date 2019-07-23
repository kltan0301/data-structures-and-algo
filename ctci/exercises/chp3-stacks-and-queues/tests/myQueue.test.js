const { MyQueue } = require('../myQueue.js');

describe('MyQueue', () => {
  describe('add', () => {
    test('adds elements to the end of the queue', () => {
      let myQueue = new MyQueue();
      [1,2,3,4,5].forEach((number) => {
        myQueue.add(number);
      });
      expect(myQueue.data()).toEqual([1,2,3,4,5]);
    });
  });

  describe('remove', () => {
    test('removes elements from start of queue', () => {
      let myQueue = new MyQueue();
      [1, 2, 3, 4, 5].forEach((number) => {
        myQueue.add(number);
      });
      expect(myQueue.remove()).toEqual(1);
      expect(myQueue.remove()).toEqual(2);
      expect(myQueue.data()).toEqual([3,4,5]);
    });

    test('removes elements from start of queue', () => {
      let myQueue = new MyQueue();
      expect(myQueue.remove()).toEqual(false);
    });
  });

  describe('peek', () => {
    test('returns top most element', () => {
      let myQueue = new MyQueue();
      [8,16,32,45,83].forEach((number) => {
        myQueue.add(number);
      });
      expect(myQueue.peek()).toEqual(8);
      expect(myQueue.data()).toEqual([8,16,32,45,83]);
    });
  });

  describe('isEmpty', () => {
    test('returns true if list is empty', () => {
      let myQueue = new MyQueue();
      expect(myQueue.isEmpty()).toEqual(true);
    });

    test('returns false if list is not empty', () => {
      let myQueue = new MyQueue();
      [8,16,32,45,83].forEach((number) => {
        myQueue.add(number);
      });
      expect(myQueue.isEmpty()).toEqual(false);
    });
  });
});
