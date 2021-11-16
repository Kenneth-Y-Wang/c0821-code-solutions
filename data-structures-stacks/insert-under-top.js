/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }

  const topValue = stack.peek();
  stack.pop();
  stack.push(value);
  stack.push(topValue);
}
