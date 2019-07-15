const { Node } = require('../dataStructures/singlyLinkedList.js');

//Solution 1
// function generateNumber(linkedList) {
//   let currentNode = linkedList.head;
//   let unit = 1;
//   let sum = 0;
//   while(currentNode) {
//     sum += unit * currentNode.data;
//     unit = unit * 10;
//     currentNode = currentNode.next;
//   }
//   return sum;
// }

// function sumLists(linkedList1, linkedList2) {
//   let sum = generateNumber(linkedList1) + generateNumber(linkedList2);
//   let sumArr = sum.toString().split('');
//   let listHead = new Node(sumArr.splice(-1));
//   let head = listHead;
//   for (let i = sumArr.length - 1; i >=0; i--) {
//     let currentNode = new Node(sumArr[i]) 
//     head.next = currentNode;
//     head = currentNode;
//   }
//   return listHead;
// }

// Solution 2: Recursive
function sumLists(linkedListNode1, linkedListNode2, carry=0) {
  if (!linkedListNode1 && !linkedListNode2 && !carry) {
    return null;
  }
  let value = carry;
  if (linkedListNode1) { value += linkedListNode1.data; }
  if (linkedListNode2) { value += linkedListNode2.data; }
  let resultNode = new Node(value % 10);
  if (linkedListNode1 || linkedListNode2) {
    let node1Val = linkedListNode1 === null ? null : linkedListNode1.next;
    let node2Val = linkedListNode2 === null ? null : linkedListNode2.next;
    let nextVal = sumLists(node1Val, node2Val, value > 10 ? 1 : 0 );
    resultNode.next = nextVal;
  }
  return resultNode;
}

// Solution 3: non-recursive (WIP)
// class PartialSum {
//   constructor() {
//     this.sum = null;
//     this.carry = 0;
//   }
// }

// function length(linkedListHead) {
//   let length = 0;
//   let currentNode = linkedListHead;
//   while (currentNode !== null) {
//     length++;
//     currentNode = currentNode.next;
//   }
//   return length;
// }

// function padList(linkedListNode, padding) {

// }

// function addLists(linkedListNode1, linkedListNode2) {
//   let length1 = length(linkedListNode1);
//   let length2 = length(linkedListNode2);

//   if (length1 < length2) {
//     linkedListNode1 = padList(linkedListNode1, length2 - length1);
//   } else {
//     linkedListNode2 = padList(linkedListNode2, length1 - length2);
//   }

//   let sum = addListHelper(linkedListNode1, linkedListNode2);
//   if (sum.carry === 0) {
//     return sum.sum;
//   } else {
//     let resultNode = insertBefore(sum.sum, sum.carry);
//     return resultNode;
//   }
// }

module.exports = {
  sumLists,
}