class Queue {
  constructor() {
    this.items = [];
  }
  clear() {
    while(this.items.length) {
      this.items.shift();
    }
  }
  isEmpty() {
    return !this.items.length;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
   this.items.shift(); 
  }
  firstEl() {
    return this.items[0];
  }
}