class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addToHead(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(data) {
    let newNode = new Node(data);
    if (!this.tail) {
      this.head = this.tail = newNode;
      return this.tail;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  deleteFromHead() {
    //list is empty
    if (!this.head) { return null; }
    this.head = this.head.next;
    return this.head;
  }

  deleteFromTail() {
    //list is empty
    if (!this.tail) { return null; }
    let currentNode = this.head;
    let secondLastNode;
    while (currentNode.next) {
      secondLastNode = currentNode;
      currentNode = currentNode.next;
    }
    if (secondLastNode) {
      secondLastNode.next = null;
    } else {
      this.head = null;
    }
    this.tail = secondLastNode;
  }

  //for testing and visualization purposes
  printList() {
    let currentNode = this.head;
    let listArray = [];
    while(currentNode !== null) {
      listArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return listArray;
  }
}

module.exports = SinglyLinkedList;