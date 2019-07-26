const Stack = require('../dataStructures/stack.js');

// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary
// stack, but you may not copy the elements into any other data structure (such as an array). The stack supports
// the following operations: push, pop, peek and isEmpty
module.exports = (stack) => {
  let newStack = new Stack();
  while (!stack.isEmpty()) {
    let element = stack.pop();
    if (!newStack.isEmpty()) {
      while (newStack.peek() < element) {
        stack.push(newStack.pop());
      }
    }
    newStack.push(element);
  }
  return newStack;
}
