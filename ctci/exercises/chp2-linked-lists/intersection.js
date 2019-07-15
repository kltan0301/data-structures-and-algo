function reverseList(node) {
  let head = node;
  let tail = node;
  while(node)  {
    let next = node.next;
    node.next = head;
    head = node;
    node = next;
  }
  tail.next = null;
  return head;
}

module.exports = (linkedListHead) => {
  let reversedLinkedListHead = reverseList(linkedListHead);
  let currentNode = linkedListHead;
  let reversedNode = reversedLinkedListHead;
  while (currentNode) {
    if (currentNode.data !== reversedNode.data) {
      return false;
    } else {
      currentNode = currentNode.next;
      reversedNode = reversedNode.next;
    }
  }
  return true;
}