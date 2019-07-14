function partition(linkedListHead, partition) {
  let lessThanListHead;
  let lessThanListTail;
  let moreThanListHead;
  let moreThanListTail;

  let currentNode = linkedListHead;
  while (currentNode) {
    if (currentNode.data < partition) {
      if (!lessThanListHead) {
        lessThanListHead = currentNode;
        lessThanListTail = currentNode;
      } else {
        lessThanListTail.next = currentNode;
        lessThanListTail = currentNode;
      }
    } else {
      if (!moreThanListTail) {
        moreThanListHead = currentNode;
        moreThanListTail = currentNode;
      } else {
        moreThanListTail.next = currentNode;
        moreThanListTail = currentNode;
      }
    }
 
    currentNode = currentNode.next;
  }
  //need to set this to ensure the tail does not reference the old node
  moreThanListTail.next = null;
 
  if (!lessThanListHead) {
    return moreThanListHead;
  }
  lessThanListTail.next = moreThanListHead;
  return lessThanListHead;
}


module.exports = {
  partition
};