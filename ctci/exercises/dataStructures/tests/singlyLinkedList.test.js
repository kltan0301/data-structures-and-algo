const SinglyLinkedList = require('../singlyLinkedList.js');

function constructFilledSLL(length) {
  if (length === 0) { return 'Length must be > 0'; }
  let sl = new SinglyLinkedList();
  for (let i = 0; i < length; i++) {
    sl.addToTail(i);
  }
  return sl;
}

describe('SinglyLinkedList', () => {
  let sl;
  beforeEach(() => {
    sl = new SinglyLinkedList();
  });

  describe('constructor', () => {
    test('instantiates the list correctly', () => {
      expect(sl.head).toBe(null);
      expect(sl.tail).toBe(null);
    });
  });

  describe('addToHead adds items to the head correctly', () => {
    test('when list is null', () => {
      sl.addToHead(4);
      expect(sl.printList()).toEqual([4]);
      expect(sl.head.data).toEqual(4);
      expect(sl.tail.data).toEqual(4);
    });

    test('when list has items', () => {
      sl.addToHead(4);
      sl.addToHead(3);
      sl.addToHead(2);
      sl.addToHead(1);
      expect(sl.printList()).toEqual([1, 2, 3, 4]);
      expect(sl.head.data).toEqual(1);
      expect(sl.tail.data).toEqual(4);
    });
  });

  describe('addToTail adds items to the tail correctly', () => {
    test('when list is null', () => {
      sl.addToTail(4);
      expect(sl.printList()).toEqual([4]);
      expect(sl.head.data).toEqual(4);
      expect(sl.tail.data).toEqual(4);
    });

    test('when list has items', () => {
      let sl = new SinglyLinkedList();
      sl.addToTail(4);
      sl.addToTail(3);
      sl.addToTail(2);
      sl.addToTail(1);
      expect(sl.printList()).toEqual([4, 3, 2, 1]);
      expect(sl.head.data).toEqual(4);
      expect(sl.tail.data).toEqual(1);
    });
  });

  describe('deleteFromHead removes items from the head correctly', () => {
    test('when list is null', () => {
      sl = new SinglyLinkedList();
      expect(sl.deleteFromHead()).toEqual(null);
      expect(sl.printList()).toEqual([]);
    });

    test('when list is filled', () => {
      list = constructFilledSLL(4);
      list.deleteFromHead();
      expect(list.printList()).toEqual([1,2,3]);
    });

    test('when list has 1 item', () => {
      list = constructFilledSLL(1);
      expect(list.printList()).toEqual([0]);
      list.deleteFromHead();
      expect(list.printList()).toEqual([]);
    });
  });

  describe('deleteFromTail removes items from the tail correctly', () => {
    test('when list is null', () => {
      sl = new SinglyLinkedList();
      expect(sl.deleteFromTail()).toEqual(null);
      expect(sl.printList()).toEqual([]);
    });

    test('when list is filled', () => {
      list = constructFilledSLL(4);
      list.deleteFromTail();
      expect(list.printList()).toEqual([0,1,2]);
    });

    test('when list has 1 item', () => {
      list = constructFilledSLL(1);
      expect(list.printList()).toEqual([0]);
      list.deleteFromTail();
      expect(list.printList()).toEqual([]);
    });
  });
});
