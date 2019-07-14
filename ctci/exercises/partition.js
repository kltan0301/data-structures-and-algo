class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = (linkedListHead, partition) {
  let lessThanListHead;
  let lessThanListTail;
  let moreThanListHead;
  let moreThanListTail;

  let currentNode = linkedListHead;
  while (currentNode) {
    if (currentNode < partition) {
      if (!lessThanListHead) {
        lessThanListHead = lessThanListTail = currentNode;
      } else {
        lessThanListTail.next = currentNode;
      }
    } else {
      if (!moreThanListHead) {
        moreThanListHead = moreThanListTail = currentNode;
      } else {
        moreThanListTail.next = currentNode;
      }
    }
    currentNode = currentNode.next;
  }

  if (!lessThanListHead) {
    return moreThanListHead; 
  }
  lessThanListTail.next = moreThanListHead;
  return lessThanListHead;
}
