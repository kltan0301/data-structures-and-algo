class SetOfStacks {
  constructor(maxHeight) {
    this.stacks = [];
    this.maxHeight = maxHeight;
  }

  push(value) {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (!lastStack || lastStack.length === this.maxHeight) {
      this.stacks.push([value]) ;
    } else {
      lastStack.push(value);
    }
  }

  pop() {
    if (this.stacks.length === 0) { return false; }
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length === 1) {
      let removedElement = this.stacks.pop();
      return removedElement[0];
    } else {
      return lastStack.pop();
    }
  }

  popAt(index) {
    if (!this.stacks[index]) { return false; }
    return this.stacks[index].pop();
  }

  //if you need to rollover the stacks after removing
  popAndRollover(index) {
    let stack = this.stacks[index];
    if (!stack) { return false; }
    let removedElement = this.stacks[index][this.maxHeight - 1];
    for (let i = index; i < this.stacks.length - 1; i++) {
      let nextStack = this.stacks[i + 1];
      let currentStack = this.stacks[i];
      currentStack[this.maxHeight - 1] = nextStack[0];
      for (let j = 1; j < this.maxHeight; j++) {
        nextStack[j - 1] = nextStack[j];
      }
    }
    //clear up last element in last stack or delete whole stack if no more
    //elements
    let lastStack = this.stacks[this.stacks.length - 1].filter((obj) => { return obj !== undefined });
    if (lastStack.length === 0) {
      this.stacks.pop();
    } else {
      this.stacks[this.stacks.length - 1].pop();
    }
    return removedElement;
  }
}

module.exports = {
  SetOfStacks,
};