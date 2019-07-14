class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) { this.tail = newNode; }
    return this.head;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  deleteFromHead() {
    this.head = this.head.next;
  }

  deleteFromTail() {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return previousNode;
  }

  delete(data) {
    if (this.head === null) { return; }
    if (this.head.next === null && this.head.data === data) { this.deleteFromHead() }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      if (currentNode.data === data) {
        previousNode.next = currentNode.next;
        return currentNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return 'Not found';
  }

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`${currentNode.data} ->`);
      currentNode = currentNode.next;
    }
  }
}

let sl = new SinglyLinkedList();
sl.insertAtTail(1);
sl.insertAtTail(2);
sl.insertAtTail(3);
sl.insertAtTail(4);
sl.insertAtTail(5);
sl.insertAtTail(6);
sl.insertAtTail(7);
sl.insertAtTail(8);
sl.insertAtTail(9);

//Iterative approach
function kThToLast(linkedList, indexToLast) {
  let p1 = linkedList.head;
  let p2 = linkedList.head;

  for(i = 0; i < indexToLast; i++) {
    p1 = p1.next;
  }

  while(p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

//Recursive approach
function kThToLast(headNode, indexToLast) {
  if (headNode === null) {
    return 0;
  }
  let index = kThToLast(headNode.next, indexToLast) + 1;
  if (index === indexToLast) {
    console.log('Kth index to last is: ' + headNode.data);
  }
  return index;
}