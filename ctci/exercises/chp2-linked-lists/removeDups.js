// Solution 1: Remove duplicates from a linked list with temporary buffer - Cost O(N)
function removeDups(linkedList) {
  let currentNode = linkedList.head;
  let objectCountHash = {};
  while (currentNode !== null) {
    let currentCount = objectCountHash[currentNode.data]
    if (!currentCount) {
      objectCountHash[currentNode.data] = 1;
    } else {
      objectCountHash[currentNode.data] = ++currentCount;
    }
    currentNode = currentNode.next;
  }
  return Object.keys(objectCountHash).map(Number);
}

// Solution 2: Without temporary buffer - Cost O(N^2)
// function removeDups(linkedList) {
//   let currentNode = linkedList.head;
//   while (currentNode !== null) {
//     let nextNode = currentNode.next;
//     while (nextNode) {
//       if (currentNode.data === nextNode.data) {
//         currentNode.next = nextNode.next;
//       }
//       nextNode = nextNode.next;
//     }
//     currentNode = currentNode.next;
//   }
//   return linkedList.printList();
// }

module.exports = {
  removeDups,
};
