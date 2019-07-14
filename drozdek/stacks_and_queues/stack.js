class Stack {
  constructor() {
    this.items = [];
  }
  pop() {
    this.items.pop();
  }
  push(item) {
    this.items.push(item);
  }
  peek() {
    return this.items.slice(-1)
  }
  isEmpty() {
    return !this.items.length;
  }
  clear() {
    while(this.items.length) {
      this.items.pop();
    }
  }
  printStack() {
    for(let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i]} ->`);
    }
  }
}
