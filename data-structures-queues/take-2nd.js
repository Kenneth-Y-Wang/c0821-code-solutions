/* exported take2nd */

function take2nd(queue) {

  if (queue.peek() === undefined) return;

  const firstValue = queue.dequeue();

  if (queue.peek() === undefined) {
    queue.enqueue(firstValue);
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    return queue.dequeue();
  }
}
