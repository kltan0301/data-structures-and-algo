// Solution 1: Store it on a node
class StackMin {
  constructor() {
    this.array = [];
  }

  push(value) {
    let currentMin = this.min();
    let node = new StackNode(value, Math.min(value, currentMin));
    return this.array[this.array.length] = node;
  }

  pop() {
    return this.array.pop();
  }

  min() {
    if(this.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    } else {
      return this.peek().min;
    }
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

class StackNode {
  constructor(value, min) {
    this.value = value;
    this.min = min;
  }
}

module.exports = {
  StackMin,
};