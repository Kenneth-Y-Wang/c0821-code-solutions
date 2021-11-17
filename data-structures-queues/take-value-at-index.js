/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;

  for (let i = 0; i < index; i++) {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
  return queue.dequeue();
}

// while(queue.peek() !== undefined && index>0){
//   queue.enqueue(queue.dequeue());
//   index --;
// }

// return queue.dequeue()
