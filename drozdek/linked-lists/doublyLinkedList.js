class Node {
  constructor(data, previous=null, next=null) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.head.next.previous = this.head;
    if (!this.tail) { this.tail = newNode; }
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    if (!this.tail){
      this.tail = newNode;
    }
    let currentLastNode = this.tail; 
    newNode.previous = currentLastNode;
    currentLastNode.next = newNode;
    this.tail = newNode;
  }

  deleteFromHead() {
    this.head = this.head.next;
    this.head.previous = null;
  }

  deleteFromTail() {
    let secondLastNode = this.tail.previous;
    secondLastNode.next = null;
    this.tail = secondLastNode;
  }

  delete(data) {
    let currentNode = this.head;
    let nodeToDelete = null;
    while ( currentNode.next !== null ) {
      if (currentNode.data === data) {
        nodeToDelete = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    nodeToDelete.previous.next = nodeToDelete.next;
  } 

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

let dll = new DoublyLinkedList()
dll.insertAtTail(5)
dll.insertAtTail(6)
dll.insertAtTail(7)
dll.insertAtTail(8)
dll.insertAtTail(9)
dll.insertAtHead(4)
dll.insertAtHead(3)
dll.insertAtHead(2)
dll.insertAtHead(1)
dll.printList()
console.log('deleting')

dll.deleteFromHead();
dll.deleteFromHead();
dll.deleteFromTail();
dll.deleteFromTail();
dll.delete(4);
dll.printList();