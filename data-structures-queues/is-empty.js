/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}

// return typeof queue.peek() === 'undefined'
