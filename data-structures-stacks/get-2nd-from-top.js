/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const topValue = stack.peek();
  stack.pop();
  if (stack.peek() === undefined) {
    stack.push(topValue);
    return undefined;
  }

  const secondValue = stack.peek();
  stack.push(topValue);

  return secondValue;
}
