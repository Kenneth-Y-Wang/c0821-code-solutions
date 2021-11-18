/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  }

  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
  return list;
}

// if(list.next === null) return;
// let prev=list;
// let next=list.next;
// while(next.next !== null){
//   prev=next;
//   next=next.next;

// }
