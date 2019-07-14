// Solution 1: Iterative approach
function kthToLast(headNode, indexToLast) {
  if (!headNode) { throw new Error('List is empty'); }
  let p1 = headNode;
  let p2 = headNode;

  for (i = 0; i < indexToLast; i++) {
    p1 = p1.next;
    if (!p1) { throw new Error('Exceeds list length') }
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2.data;
}

// Solution 2: Recursive approach, can only print
function kthToLastRecursive(headNode, indexToLast) {
  if (headNode === null) {
    return 0;
  }
  let index = kthToLastRecursive(headNode.next, indexToLast) + 1;
  if (index === indexToLast) {
    console.log('Kth index to last is: ' + headNode.data);
  }
  return index;
}

module.exports.kthToLast = kthToLast;