class Stack {
  constructor() {
    this.data = [];
  }

  pop() {
    if (this.data.length === 0) { return false; }
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
}

module.exports = Stack;