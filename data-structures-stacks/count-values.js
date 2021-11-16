/* exported countValues */

function countValues(stack) {
  const array = [];
  while (stack.peek() !== undefined) {
    array.push(stack.peek());
    stack.pop();
  }
  return array.length;
}
