// Implement a MyQueue class which implements a queue using 2 stacks
class Stack {
  constructor() {
    this.data = [];
  }

  pop() {
    return this.data.pop();
  }

  push(item) {
    return !!this.data.push(item);
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  reverse() {
    return this.data.reverse(); 
  }
}

class MyQueue {
  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  data() {
    return this.stackOldest.reverse().concat(this.stackNewest.data);
  }

  add(value) {
    return this.stackNewest.push(value);
  }

  _reshuffleArray() {
    if (!this.stackNewest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        let data = this.stackNewest.pop();
        this.stackOldest.push(data);
      }
    }
  }

  remove() {
    if (this.isEmpty()) { return false; }
    this._reshuffleArray();
    return this.stackOldest.pop();
  }

  peek() {
    this._reshuffleArray();
    return this.stackOldest.peek();
  }

  isEmpty() {
    return this.stackNewest.isEmpty() && this.stackOldest.isEmpty();
  }
}

module.exports = {
  MyQueue,
};