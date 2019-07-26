const Queue = require('../queue.js');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  describe('constructor', () => {
    test('instantiates the stack correctly', () => {
      expect(queue.nodes).toStrictEqual([]);
    });
  });

  describe('enqueue', () => {
    test('adds new node to queue', () => {
      queue.nodes = [];
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.nodes).toEqual([1,2]);
    });
  });

  describe('dequeue', () => {
    test('returns false if queue is empty', () => {
      expect(queue.dequeue()).toEqual(false);
    });

    test('adds elements to the end of the stack', () => {
      queue = new Queue([6,8,9]);
      expect(queue.nodes).toEqual([6,8,9]);
    });
  });

  describe('isEmpty()', () => {
    test('returns true when stack is empty', () => {
      expect(queue.isEmpty()).toEqual(true);
    });

    test('returns false when stack is not empty', () => {
      queue = new Queue([1,2,3,4]);
      expect(queue.isEmpty()).toEqual(false);
    });
  });
});
