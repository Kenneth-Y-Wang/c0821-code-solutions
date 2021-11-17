/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;

  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }

  const second = queue.dequeue();
  if (second === first || second < first) {
    queue.enqueue(first);
    return second;
  }
  if (second > first) {
    queue.enqueue(second);
    return first;
  }

}
