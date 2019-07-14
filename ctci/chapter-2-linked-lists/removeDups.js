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
    if (!this.tail) {
      return newNode;
    }
    this.tail.next = newNode;
    return this.head;
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
sl.insertAtHead(3);
sl.insertAtHead(3);
sl.insertAtHead(2);
sl.insertAtHead(2);
sl.insertAtHead(2);
sl.insertAtHead(4);
sl.insertAtHead(5);
sl.insertAtHead(5);
sl.insertAtHead(5);
sl.printList();


//implementation 1 - uses O(n)
function removeDups(linkedList) {
  let currentNode = linkedList.head;
  let objectCountHash = {};
  while (currentNode.next !== null) {
    let currentCount = objectCountHash[currentNode.data]
    if (!currentCount) {
      objectCountHash[currentNode.data] = 1;
    } else {
      objectCountHash[currentNode.data] = ++currentCount;
    }
    currentNode = currentNode.next;
  }
  return Object.keys(objectCountHash);
}

//implementation 2 - O(n^2)
function removeDups1(linkedList) {
  let currentNode = linkedList.head;
  while(currentNode !== null) {
    let nextNode = currentNode.next;
    while(nextNode) {
      if (currentNode.data === nextNode.data) {
        currentNode.next = nextNode.next;
      }
      nextNode = nextNode.next;
    }
    currentNode = currentNode.next;
  }
  return linkedList.printList();
}