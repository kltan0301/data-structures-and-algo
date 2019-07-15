class ThreeInOne {
  constructor(stackSize) {
    this.array = [];
    this.stackSize = stackSize;
  }

  computeStackIndexes(stackNumber) {
    let stackStartIndex = (stackNumber - 1) * this.stackSize;
    let stackEndIndex = stackStartIndex + this.stackSize;
    return { stackStartIndex, stackEndIndex }
  }

  push(stackNumber, item) {
    let { stackStartIndex, stackEndIndex } = this.computeStackIndexes(stackNumber);
    for (let index = stackStartIndex; index < stackEndIndex; index++) {
      if (this.array[index] === null || this.array[index] === undefined ) {
        return this.array[index] = item;
      }
    }
    return false;
  }

  pop(stackNumber) {
    let { stackStartIndex, stackEndIndex } = this.computeStackIndexes(stackNumber);
    for (let index = stackEndIndex - 1; index >= stackStartIndex; index--) {
      if (this.array[index]) {
        this.array[index] = undefined;
        return true;
      }
    }
    return false;
  }

  peek(stackNumber) {
    let { stackStartIndex, stackEndIndex } = this.computeStackIndexes(stackNumber);
    for (let index = stackEndIndex - 1; index >= stackStartIndex; index--) {
      if (this.array[index]) {
        return this.array[index];
      }
    }
    return null;
  }

  isEmpty(stackNumber) {
    let { stackStartIndex, stackEndIndex } = this.computeStackIndexes(stackNumber);
    for (let index = stackEndIndex - 1; index >= stackStartIndex; index--) {
      if (this.array[index]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  ThreeInOne,
};