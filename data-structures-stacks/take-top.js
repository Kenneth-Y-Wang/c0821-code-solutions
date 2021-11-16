/* exported takeTop */

function takeTop(stack) {
  const result = stack.peek();
  stack.pop();

  return result;
}
