const { ThreeInOne } = require('../threeInOne.js');

describe('threeInOne', () => {
  test('constructs a threeInOne array correctly', () => {
    let threeInOneArr = new ThreeInOne(5);
    expect(threeInOneArr.array).toEqual([]);
    expect(threeInOneArr.stackSize).toEqual(5);
  });

  describe('push', () => {
    test('adds items into correct stack when stacks are not filled', () => {
      let threeInOneArr = new ThreeInOne(5);
      threeInOneArr.push(2, 1);
      threeInOneArr.push(2, 2);
      threeInOneArr.push(2, 3);
      threeInOneArr.push(3, 3);
      threeInOneArr.push(3, 4);
      threeInOneArr.push(3, 5);
      threeInOneArr.push(1, 3);
      expect(threeInOneArr.array.toString()).toEqual('3,,,,,1,2,3,,,3,4,5');
    });

    test('return false if stack is already filled', () => {
      let threeInOneArr = new ThreeInOne(2);
      for(let i = 0; i < 5; i++) {
        threeInOneArr.push(1, i);
      }
      expect(threeInOneArr.push(1, 5)).toEqual(false);
    });
  });
 
  describe('pop', () => {
    test('returns true from the correct stack when stacks have items to remove', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      threeInOneArr.push(2, 21);
      threeInOneArr.push(2, 22);
      threeInOneArr.push(3, 31);
      expect(threeInOneArr.pop(2)).toEqual(true);
      expect(threeInOneArr.array.toString()).toEqual('11,12,21,,31');
    });

    test('returns false if stack has no more items to remove', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      threeInOneArr.push(3, 31);
      expect(threeInOneArr.pop(2)).toEqual(false);
      expect(threeInOneArr.array.toString()).toEqual('11,12,,,31');
    });
  });

  describe('peek', () => {
    test('returns topmost items from correct stack when stack has items', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      threeInOneArr.push(2, 21);
      threeInOneArr.push(2, 22);
      threeInOneArr.push(3, 31);
      expect(threeInOneArr.peek(2)).toEqual(22);
    });

    test('returns null if stack does not have items', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      threeInOneArr.push(3, 31);
      expect(threeInOneArr.peek(2)).toEqual(null);
    });
  });

  describe('isEmpty', () => {
    test('returns true when stack is empty', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      expect(threeInOneArr.isEmpty(2)).toEqual(true);
    });

    test('returns true when stack is filled', () => {
      let threeInOneArr = new ThreeInOne(2);
      threeInOneArr.push(1, 11);
      threeInOneArr.push(1, 12);
      expect(threeInOneArr.isEmpty(1)).toEqual(false);
    });
  });
});
