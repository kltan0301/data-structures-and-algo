const SinglyLinkedList = require('../singlyLinkedList.js');

let constructSll = (arr) => {
  let sl = new SinglyLinkedList();
  arr.forEach((val) => {
    sl.addToTail(val)
  });
  return sl;
}

module.exports = {
  constructSll,
}