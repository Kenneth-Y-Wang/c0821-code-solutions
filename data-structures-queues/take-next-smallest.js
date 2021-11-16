/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;

  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }

  let nextValue = queue.peek();
  while (firstValue > nextValue) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    nextValue = queue.peek();
  }
  return firstValue;
}
